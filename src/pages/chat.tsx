"use client";
import React, { useState } from "react";
import { Box, Grid, Avatar, TextField } from "@mui/material";
import "./styles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import dynamic from "next/dynamic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useRouter } from "next/router";

const Picker = dynamic(
  () => {
    return import("emoji-picker-react");
  },
  { ssr: false }
);

export default function Chat() {
  const router = useRouter();

  const [userList, setUserList] = useState([
    "primeiro",
    "segundo",
    "terceiro",
    "quarto",
    "quinto",
    "sexto",
    "sétimo",
    "oitavo",
    "nono",
    "décimo",
    "décimo-primeiro",
    "décimo-segundo",
    "décimo-terceiro",
    "décimo-quarto",
  ]);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleUserClick = (userName) => {
    console.log("Selected user: " + userName);
  };

  const handleSendClick = () => {
    console.log("Clicked on send button ");
  };

  const handleLogoutClick = () => {
    console.log("Clicked on logout button ");
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
                    <Box my={1}>Username</Box>
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
            <Grid
              container
              spacing={2}
              onClick={() => handleUserClick("usuário selecionado")}
            >
              <Grid item xs={1}>
                <AccountCircleIcon fontSize="large" />
              </Grid>
              <Grid item xs={11}>
                Usuário selecionado
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
                onClick={() => handleUserClick(item)}
              >
                <Grid item xs={2}>
                  <Box py={2}>
                    <AccountCircleIcon fontSize="medium" />
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box py={2}>{item}</Box>
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
              <Grid item xs={12} className="messages-box" height={700}></Grid>

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
                  <TextField placeholder="Type your message here" fullWidth />
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
