"use client";
import React, { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const handleUserClick = () => {
    router.push("/chat");
  };

  return (
    <main>
      {" "}
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="text"
              label="Type your name"
              name="text"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleUserClick}
            >
              Enter Chat
            </Button>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
