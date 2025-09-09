import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function PasswordResetConfirm() {
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
        Digite sua Nova Senha
      </Typography>
      <form method="post">
        <TextField
          type="password"
          name="new_password1"
          label="Nova senha"
          required
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          type="password"
          name="new_password2"
          label="Confirme a nova senha"
          required
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#0ABAB5", ":hover": { backgroundColor: "#068E89" } }}>
          Alterar Senha
        </Button>
      </form>
    </Box>
  );
}
