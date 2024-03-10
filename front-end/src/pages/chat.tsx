"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Avatar, TextField } from "@mui/material";
import "./styles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import dynamic from "next/dynamic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useRouter } from "next/router";
import axios from "axios";

import io from "socket.io-client";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

export default function Chat() {
  const router = useRouter();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [userList, setUserList] = useState([]);

  // Variáveis respectivas ao remetente
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  // Variáveis respectivas ao destinatário
  const [userToId, setUserToId] = useState("");
  const [userToName, setUserToName] = useState("");

  // Lista de Mensagens
  const [messages, setMessages] = useState([]);

  // Ajuste scrollbar
  const messagesBoxRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesBoxRef.current) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();

    if (router.query.username !== "") {
      const newUsername = router.query.username;
      const newId = router.query.id;
      setUsername(newUsername);
      setUserId(newId);

      //   console.log(userId);

      const auxSocket = io(process.env.SOCKET_IO_URL);

      //   console.log("authenticating");
      auxSocket.auth = {
        username: router.query.username,
        id: router.query.id,
      };

      auxSocket.on("users", (users, id) => {
        // console.log("new user connected");
        let auxUsers = [];
        for (let i = 0; i < users.length; i++) {
          //   if (users[i].name !== newUsername && users[i].id != id) {
          if (users[i].name !== newUsername) {
            auxUsers.push(users[i]);
          }
        }
        setUserList(auxUsers);
      });

      // Recebe uma mensagem
      auxSocket.on(
        "redirect message",
        ({ content, toUsername, toId, fromUsername, fromId }) => {
          console.log("received:" + content + " from " + fromUsername);

          console.log(fromId);
          //   if (userToName == fromUsername && userToId == fromId) {
          if (userToName == fromUsername) {
            const auxMessages = [...messages];
            const auxContent = { sender: userToId, text: content };
            auxMessages.push(auxContent);
            setMessages(auxMessages);
            console.log(messages);
          }
        }
      );

      setSocket(auxSocket);

      return () => {
        if (auxSocket) {
          auxSocket.disconnect();
        }
      };
    } else {
      router.push("/");
    }
  }, [router.query.username, router.query.id, username, messages]);

  const handleUserClick = async (destName, destId) => {
    console.log("sendint to " + destId);
    setUserToName(destName);
    setUserToId(destId);

    const response = await axios.get(
      process.env.API_URL +
        "/messages?sender=" +
        userId +
        "&receiver=" +
        destId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response.data);
    setMessages(response.data);

    // console.log(messages);
  };

  const handleSendClick = async () => {
    if (socket) {
      socket.emit("private message", {
        content: textMessage,
        toUsername: userToName,
        toId: userToId,
        fromUsername: username,
        fromId: userId,
      });
      setTextMessage("");

      const auxMessages = messages;
      const auxContent = { sender: userId, text: textMessage };
      auxMessages.push(auxContent);
      setMessages(messages);

      let data = {
        text: textMessage,
        sender: userId,
        receiver: userToId,
      };

      const response = await axios.post(
        process.env.API_URL + "/messages",
        data
      );

      scrollToBottom();
    }

    console.log("Clicked on send button ");
  };

  const handleLogoutClick = () => {
    console.log("Clicked on logout button ");
    socket.disconnect();
    router.push("/");
  };

  return (
    <main className="mainContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2} className="grid-border">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={3}>
                    <AccountCircleIcon fontSize="large" />
                  </Grid>
                  <Grid item xs={9}>
                    <Box my={1}>{username}</Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  spacing={2}
                  onClick={() => handleLogoutClick()}
                  className="sent-button"
                >
                  <Grid item xs={12}>
                    <Box my={1} mx={3}>
                      <LogoutIcon />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={10} className="grid-border">
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <AccountCircleIcon fontSize="large" />
              </Grid>
              <Grid item xs={11}>
                {userToName}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} height={810} className="chat-container">
          <Grid item xs={2} className="chat-box" height={810}>
            {userList.map((item, index) => (
              <Grid
                container
                spacing={2}
                key={index}
                className="user-list"
                onClick={() => handleUserClick(item.name, item.dbId)}
              >
                <Grid item xs={2}>
                  <Box py={2}>
                    <AccountCircleIcon fontSize="medium" />
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box py={2}>{item.name}</Box>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={10} className="chat-box">
            <Grid
              spacing={2}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                className="messages-box"
                height={700}
                ref={messagesBoxRef}
              >
                <Grid
                  spacing={2}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  {messages.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      className={
                        item.sender == userId
                          ? "message-sender"
                          : "message-receiver"
                      }
                    >
                      {item.text}
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item xs={1}>
                <Grid spacing={2} container>
                  <Grid
                    item
                    xs={10}
                    className="sent-button"
                    onClick={() =>
                      showEmojiPicker
                        ? setShowEmojiPicker(false)
                        : setShowEmojiPicker(true)
                    }
                  >
                    <Box mx={3} my={4}>
                      <InsertEmoticonIcon />
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Picker
                      open={showEmojiPicker}
                      lazyLoadEmojis={true}
                      className="emoji-picker"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={10}>
                <Box>
                  <TextField
                    placeholder="Type your message here"
                    fullWidth
                    value={textMessage}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && textMessage.trim() !== "") {
                        handleSendClick();
                      }
                    }}
                    onChange={(e) => setTextMessage(e.target.value)}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={1}
                className="sent-button"
                onClick={handleSendClick}
              >
                <Box mx={5} my={4}>
                  <SendIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
