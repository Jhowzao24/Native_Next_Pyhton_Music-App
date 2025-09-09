import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function PasswordResetComplete() {
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
        Senha Redefinida com Sucesso!
      </Typography>
      <Link href="/auth/login">
        <Button variant="contained" sx={{ backgroundColor: "#0ABAB5", ":hover": { backgroundColor: "#068E89" } }}>
          Ir para Login
        </Button>
      </Link>
    </Box>
  );
}
