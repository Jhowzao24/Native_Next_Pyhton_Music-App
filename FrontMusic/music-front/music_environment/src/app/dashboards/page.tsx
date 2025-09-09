"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Box, Typography, Menu, MenuItem, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import MainApp from "../bodyapp/page";
import { Toaster, toast } from "react-hot-toast";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import { Stack, Text } from '@fluentui/react';
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const Dashboard = () => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Controla o menu
  const open = Boolean(anchorEl); // Verifica se o menu está aberto

  const themes: Record<string, Theme> = {
    light: createTheme({
      palette: {
        mode: "light",
        primary: { main: "#1976d2" },
        secondary: { main: "#f50057" },
        background: { default: "#f3f4f6" },
        text: { primary: "#000000" },
      },
    }),
    dark: createTheme({
      palette: {
        mode: "dark",
        primary: { main: "#90caf9" },
        secondary: { main: "#f48fb1" },
        background: { default: "#212121" },
        text: { primary: "#ffffff" },
      },
    }),
    custom: createTheme({
      palette: {
        mode: "light",
        primary: { main: "#ff9800" },
        secondary: { main: "#4caf50" },
        background: { default: "#b4e3e9" },
        text: { primary: "#1b5e20" },
      },
    }),
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Abre o menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Fecha o menu
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.loading("Getting out of the systems");
    router.push("/");
  };

    const [contador, setContador] = useState(0);
  
    useEffect(() => {
      if (contador > 0) {
        window.location.reload();
      }
    }, [contador]);

    const handleTkinterDatas = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/abrir_tkinter_datas/");
        const data = await response.json();
        console.log(data.message); // Mensagem de retorno
      } catch (error) {
        console.error("Erro ao abrir o Tkinter:", error);
      }
    };
  

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box display="flex" gap={2}>
        <Accordion sx={{ width: "250px" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Themes</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ width: "250px" }}>
              <Typography variant="h6">Paleta de Temas</Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Clique para alternar os temas
              </Typography>
              {/* Botão para abrir o menu */}
              <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Escolher Tema
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    setCurrentTheme("light");
                    handleClose();
                  }}
                >
                  Tema Claro
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCurrentTheme("dark");
                    handleClose();
                  }}
                >
                  Tema Escuro
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setCurrentTheme("custom");
                    handleClose();
                  }}
                >
                  Tema Personalizado
                </MenuItem>
              </Menu>
            </AccordionDetails>
          </Accordion>
        </Box>
      <Typography variant="h6" fontWeight="bold"> 🎉</Typography>
      <div className="flex flex-row gap-10 items-start justify-start absolute top-0 left-0 p-20 border-4 border-blue-500 border-solid rounded-lg">
        <Button
          onClick={() => router.push("/sistema/management")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          startIcon={<SettingsIcon/>}
          sx={{
            backgroundColor: "primary.main", // Acompanha o tema atual
            color: "primary.contrastText",
            "&:hover": {
              backgroundColor: "primary.dark", // Adapta hover ao tema
            },
            padding: "20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
            cursor: 'pointer',
            marginRight: '5px',
            fontSize: '12px',
          }}
        >
          Management
        </Button>
        <Button
          onClick={() => router.push("/sistema/relatorio")}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          startIcon={<AssessmentIcon />}
          sx={{
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
            padding: "20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
            cursor: 'pointer',
            marginRight: '5px',
            fontSize: '12px',
          }}
        >
          Report
        </Button>
        <Button
          onClick={() => router.push("/sistema/settings")}
          className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
          startIcon={<ManageAccountsIcon/>}
          sx={{
            backgroundColor: "error.main",
            color: "error.contrastText",
            "&:hover": {
              backgroundColor: "error.dark",
            },
            padding: "20px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
            cursor: 'pointer',
            marginRight: '5px',
            fontSize: '12px',
          }}
        >
          Settings
        </Button>
        <Button
        startIcon={<ExitToAppIcon />}
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white p-2 rounded"
        sx={{
          backgroundColor: "warning.main",
          color: "warning.contrastText",
          "&:hover": {
            backgroundColor: "warning.dark",
          },
          padding: "20px 15px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
          cursor: 'pointer',
          marginRight: '5px',
          fontSize: '12px',
        }}
      >
        Logout
      </Button>
      <Button
        onClick={() => setContador(contador + 1)}
        sx={{
          backgroundColor: "success.main",
          color: "warning.contrastText",
          "&:hover": {
            backgroundColor: "success.dark",
          },
          padding: "20px 15px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
          cursor: 'pointer',
          marginRight: '5px',
          fontSize: '12px',
        }}
      >
        <AutorenewIcon/>
      </Button>
      <Button
        startIcon={<AccountCircleIcon />
        }
        onClick={handleTkinterDatas}
        className="mt-4 bg-red-500 text-white p-2 rounded"
        sx={{
          backgroundColor: "info.main",
          color: "warning.contrastText",
          "&:hover": {
            backgroundColor: "info.dark",
          },
          padding: "20px 15px",
          borderRadius: "8px",
          transition: "background-color 0.3s ease",
          cursor: 'pointer',
          marginRight: '5px',
          fontSize: '12px',
        }}
      >
        Users Datas
      </Button>
      <MainApp/>
      </div>
      <Toaster/>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;