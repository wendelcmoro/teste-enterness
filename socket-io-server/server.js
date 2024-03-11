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
  const id = socket.handshake.auth.id;
  if (!username) {
    return next(new Error("Username does not exist"));
  }

  socket.username = username;
  socket.dbId = id;
  next();
});

io.on("connection", (socket) => {
  let users = [];

  //   console.log("Someone has connected");

  for (let [id, socket] of io.of("/").sockets) {
    const auxUser = { id: id, name: socket.username, dbId: socket.dbId };
    users.push(auxUser);
  }

  // Envia lista de usuários conectados para o clientes
  console.log(users);
  io.emit("users", users, socket.id);
  //   socket.emit("users", users, socket.id);

  socket.on(
    "private message",
    ({ content, toUsername, toId, fromUsername, fromId }) => {
      //   console.log(
      //     "Message to " + toUsername + " with id " + toId + ": " + content
      //   );
      //   console.log("Message from " + fromUsername + " with id " + fromId);

      for (let [id, socket] of io.of("/").sockets) {
        if (socket.username == toUsername && socket.dbId == toId) {
          socket.emit("redirect message", {
            content: content,
            toUsername: toUsername,
            toId: toId,
            fromUsername: fromUsername,
            fromId: fromId,
          });
        }
      }
    }
  );

  socket.on("disconnect", () => {
    users = [];
    for (let [id, socket] of io.of("/").sockets) {
      const auxUser = { id: id, name: socket.username, auxId: socket.auxId };
      users.push(auxUser);
    }

    io.emit("users", users, socket.id);
    // console.log("Disconnect");
  });
});

const PORT = process.env.PORT || 3001;

websocket.listen(PORT, "0.0.0.0", () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
