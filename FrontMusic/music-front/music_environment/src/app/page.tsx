"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { Button } from "evergreen-ui";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ViolinIcon from "@mui/icons-material/QueueMusic"; 
import PianoIcon from "@mui/icons-material/Piano";

//import Image from 'next/image';


export default function Hai() {
  const [hover, setHover] = useState(false);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        //background: "linear-gradient(to bottom, #b5ffe5, #67f3ee, #2885ff)", 
        //backgroundImage: "url('https://img.freepik.com/fotos-gratis/renderizacao-3d-de-violinos-em-fundo-branco-com-caminho-de-corte_1057-46305.jpg?t=st=1743362584~exp=1743366184~hmac=c2991a590c9cee6953ac230d9d4cba513aeb41a079e25e8d3f626f460baca3ce&w=740')",
        padding: "50px", // Ajusta a imagem para caber na tela inteira
        //backgroundImage: "url('https://img.freepik.com/fotos-premium/dia-nacional-do-violino_1263326-111419.jpg?w=740')",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('https://img.freepik.com/fotos-premium/um-violino-azul-esta-sobre-uma-mesa-com-fundo-rosa-e-roxo_889227-5893.jpg?w=900')",
        //backgroundImage: "url('https://img.freepik.com/fotos-premium/instrumento-musical-em-pe-em-um-podio-minimo-fundo-branco-desfocado_950002-69197.jpg?w=1060')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "#0ABAB5", // Verde Tiffany para destaque
          color: "white",
          borderRadius: "8px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "'Roboto', sans-serif" }}>
          🎻 Bem-vindo ao Sistema de Música 🎵
        </Typography>
        <Typography variant="subtitle1">A harmonia perfeita entre teoria e prática.</Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Ícones Representando Música */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "150px",
            opacity: '2px'
          }}
        >
          <MusicNoteIcon sx={{ fontSize: "80px", color: "#0ABAB5" }} />
          <ViolinIcon sx={{ fontSize: "80px", color: "#9516df" }} />
          <PianoIcon sx={{ fontSize: "80px", color: "#2011ec" }} />
        </Box>

        {/* Botões para Login e Registro */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Link href="/page-auth">
            <Button 
              style={{
                backgroundColor: hover ? '#33e0e0' : '#689fdd', // Azul Tiffany
                color: 'white',
                padding: '50px 50px',
                fontSize: hover ? '1.5rem' : '1.2rem', // Muda o tamanho no hover
                border: '2px solid #0a97ba', // Verde Tiffany
                transition: 'font-size 0.3s ease, background-color 0.3s ease',
              }}            
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}      
            >
            Registrar e Entrar
            </Button>
          </Link>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#0ABAB5",
          color: "white",
          borderRadius: "8px",
          marginTop: "20px",
        }}
      >
        <Typography variant="body2">
          🎵 Desenvolvido para amantes da música. Inspire-se e cresça com seu instrumento. 🎻
        </Typography>
      </Box>
    </Box>
  );
}
