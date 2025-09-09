"use client"
import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PasswordResetRequest() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch("http://127.0.0.1:8000/api/password_reset/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      // Redireciona para a página "done"
      router.push("/password-reset/done");
    } else {
      const data = await res.json();
      setError(data.error || "Erro ao enviar o e-mail. Tente novamente.");
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    setError("Ocorreu um erro. Verifique sua conexão e tente novamente.");
  }
};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(to bottom, #EAF8F3, #A0E7E5)",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px", color: "#0ABAB5" }}>
        Redefinir Senha
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          label="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#0ABAB5", ":hover": { backgroundColor: "#068E89" } }}>
          Enviar Link de Redefinição
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </Box>
  );
}
