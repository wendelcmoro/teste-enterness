"use client";
import React, { useState } from "react";
import { Box, Grid, Avatar, TextField } from "@mui/material";
import "./styles.css";
import LogoutIcon from "@mui/icons-material/Logout";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
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

  return (
    <main className="mainContainer">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2} className="grid-border">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Grid>
              <Grid item xs={8}>
                Username
              </Grid>
              <Grid item xs={2}>
                <LogoutIcon />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} className="grid-border">
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </Grid>
              <Grid item xs={11}>
                Username
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={2} className="chat-box">
            {userList.map((item, index) => (
              <Grid container spacing={2} key={index} className="user-list">
                <Grid item xs={2}>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Grid>
                <Grid item xs={10}>
                  {item}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={10} className="chat-box">
            <Grid container spacing={2}>
              <Grid item xs={12} className="messages-box"></Grid>
              <Grid item xs={11} className="text-field">
                <TextField
                  id="outlined-disabled"
                  placeholder="Type your message here"
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <SendIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
