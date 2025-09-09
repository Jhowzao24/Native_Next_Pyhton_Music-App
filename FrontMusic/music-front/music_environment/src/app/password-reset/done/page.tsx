import React from "react";
import { Box, Typography } from "@mui/material";

export default function PasswordResetDone() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(to bottom, #EAF8F3, #A0E7E5)",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", color: "#0ABAB5" }}>
        Um link para redefinir sua senha foi enviado para o e-mail fornecido.
        Verifique sua caixa de entrada e siga as instruções.
      </Typography>
    </Box>
  );
}
