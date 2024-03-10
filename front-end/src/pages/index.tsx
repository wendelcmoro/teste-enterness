// Importações necessárias
import React, { useState } from "react";
import { Container, Grid, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  // Definindo o esquema de validação Yup
  const validationSchema = Yup.object({
    text: Yup.string().required("Name is required"),
  });

  // Inicializando o Formik
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        let data = {
          name: formik.values.text,
        };

        const response = await axios.post(process.env.API_URL + "/users", data);

        router.push({
          pathname: "/chat",
          query: { username: response.data.name, id: response.data.id },
        });
      } catch (error) {
        console.error("Error on creating user:", error);
      }
    },
  });

  return (
    <main>
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
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="text"
                label="Type your name"
                name="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                error={formik.touched.text && Boolean(formik.errors.text)}
                helperText={formik.touched.text && formik.errors.text}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Enter Chat
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </main>
  );
}
