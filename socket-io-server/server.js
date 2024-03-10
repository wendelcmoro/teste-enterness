const express = require("express");
const app = express();
const websocket = require("http").createServer(app);
const io = require("socket.io")(websocket, {
  // tamanho máximo de transferencia de arquivos = 4MB
  maxHttpBufferSize: 10e7,
  cors: {
    origin: "*",
  },
  pingTimeout: 30000,
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Username does not exist"));
  }

  socket.username = username;
  next();
});

io.on("connection", (socket) => {
  let users = [];

  console.log("Someone has connected");

  for (let [id, socket] of io.of("/").sockets) {
    const auxUser = { id: id, name: socket.username };
    // socket.emit("users", auxUser);
    users.push(auxUser);
  }
  io.emit("users", users, socket.id);
  //   socket.emit("users", users, socket.id);

  // Envia lista de usuários conectados para o cliente
  console.log(users);
  console.log(socket.id);
  socket.emit("users", users, socket.id);

  socket.on(
    "private message",
    ({ content, toUsername, toId, fromUsername, fromId }) => {
      console.log(
        "Message to " + toUsername + " with id " + toId + ": " + content
      );
      console.log("Message from " + fromUsername + " with id " + fromId);

      for (let i = 0; i < users.length; i++) {
        // if (users[i].username == toUsername && users[i].id == toId) {
        if (users[i].name == toUsername) {
          socket.to(users[i].id).emit("redirect message", {
            content: content,
            toUsername: toUsername,
            toId: toId,
            fromUsername: fromUsername,
            fromId: fromId,
          });

          console.log("redirecting message....");
        }
      }
    }
  );

  socket.on("disconnect", () => {
    users = [];
    for (let [id, socket] of io.of("/").sockets) {
      const auxUser = { id: id, name: socket.username };
      users.push(auxUser);
    }

    io.emit("users", users, socket.id);
    console.log("Disconnect");
  });
});

const PORT = process.env.PORT || 3001;

websocket.listen(PORT, "0.0.0.0", () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
