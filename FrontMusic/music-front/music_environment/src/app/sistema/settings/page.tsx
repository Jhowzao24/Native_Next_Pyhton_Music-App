"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */

/*
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from "@mui/material";
import { Pane } from "evergreen-ui";

const UserManagementMui = () => {
  const [step, setStep] = useState("authenticate");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleAuthentication = () => {
    setMessage("Autenticação bem-sucedida. Escolha uma ação abaixo.");
    setStep("options");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 7, display: "flex", flexDirection: "column", gap: 2, backgroundColor: 'lightgrey' }}>
      <Typography variant="h4">Gerenciamento de Usuários</Typography>
      {message && <Alert severity="info">{message}</Alert>}

      {step === "authenticate" && (
        <>
          <TextField label="Digite seu email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button variant="contained" onClick={handleAuthentication}>
            Autenticar
          </Button>
        </>
      )}

      {step === "options" && (
        <>
          <Button variant="contained" onClick={() => setStep("edit")}>
            Editar Dados
          </Button>
          <Button variant="outlined" onClick={() => setMessage("Usuário excluído!")}>
            Excluir Conta
          </Button>
        </>
      )}

      {step === "edit" && (
        <>
          <TextField label="Novo Nome de Usuário" />
          <TextField label="Novo Email" />
          <TextField label="Nova Senha" type="password" />
          <Button variant="contained" onClick={() => setMessage("Dados atualizados!")}>
            Salvar Alterações
          </Button>
          <Button variant="text" onClick={() => setStep("options")}>
            Voltar
          </Button>
        </>
      )}
    </Box>
  );
};

export default UserManagementMui;

*/

import React, { useState } from 'react';
import { PrimaryButton, Stack, MessageBar, MessageBarType } from "@fluentui/react";
import { TextField } from '@mui/material';

const UserManagementFluent = () => {
  const [step, setStep] = useState("authenticate");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [username, setUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAuthentication = async () => {
    // Autenticação simulada
    setMessage("Autenticação bem-sucedida. Escolha uma ação abaixo.");
    setStep("options");
    setUserId(1);
  };

  return (
    <Stack tokens={{ childrenGap: 30 }} style={{ maxWidth: 900, margin: "0 auto", padding: 70 }}>
      <h1>Gerenciamento de Usuário</h1>
      {message && <MessageBar messageBarType={MessageBarType.info}>{message}</MessageBar>}

      {step === "authenticate" && (
        <>
          <TextField label="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PrimaryButton text="Autenticar" onClick={handleAuthentication} />
        </>
      )}

      {step === "options" && (
        <>
          <PrimaryButton text="Editar Dados" onClick={() => setStep("edit")} />
          <PrimaryButton text="Excluir Conta" onClick={() => setMessage("Usuário excluído!")} />
        </>
      )}

      {step === "edit" && (
        <>
          <TextField label="Novo Nome de Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Novo Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          <TextField label="Nova Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <PrimaryButton text="Salvar Alterações" onClick={() => setMessage("Dados atualizados!")} />
          <PrimaryButton text="Voltar" onClick={() => setStep("options")} />
        </>
      )}
    </Stack>
  );
};

export default UserManagementFluent;


/*

const UserManagement = () => {
  const [step, setStep] = useState('authenticate'); // Controla a etapa atual
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState<number | null>(null); // Armazena o ID do usuário
  const [username, setUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Função para autenticar o email
  const handleAuthentication = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setUserId(data.user_id);
        setStep('options'); // Vai para a próxima etapa
        setMessage('Autenticação bem-sucedida. Escolha uma ação abaixo.');
      } else {
        setMessage(data.message || 'Erro ao autenticar o email.');
      }
    } catch (error) {
      setMessage('Ocorreu um erro ao autenticar. Tente novamente.');
    }
  };

  // Função para editar os dados do usuário
  const handleEdit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, username, email: newEmail, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Dados atualizados com sucesso.');
      } else {
        setMessage(data.message || 'Erro ao atualizar os dados.');
      }
    } catch (error) {
      setMessage('Ocorreu um erro ao atualizar os dados.');
    }
  };

  // Função para excluir o usuário
  const handleDelete = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user/', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId }),
      });

      if (response.ok) {
        setMessage('Usuário excluído com sucesso.');
        setStep('authenticate'); // Volta para a etapa inicial
        setEmail('');
        setUserId(null);
      } else {
        setMessage('Erro ao excluir o usuário.');
      }
    } catch (error) {
      setMessage('Ocorreu um erro ao excluir o usuário.');
    }
  };

  // Renderizando a interface de acordo com a etapa
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Gerenciamento de Usuário</h1>
      <p>{message}</p>

      {step === 'authenticate' && (
        <>
          <h2>Etapa 1: Autenticar Email</h2>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleAuthentication}>Autenticar</button>
        </>
      )}

      {step === 'options' && (
        <>
          <h2>Escolha uma Ação</h2>
          <button onClick={() => setStep('edit')}>Editar Dados</button>
          <button onClick={handleDelete}>Excluir Conta</button>
        </>
      )}

      {step === 'edit' && (
        <>
          <h2>Editar Dados</h2>
          <input
            type="text"
            placeholder="Novo Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Novo Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nova Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleEdit}>Salvar Alterações</button>
          <button onClick={() => setStep('options')}>Voltar</button>
        </>
      )}
    </div>
  );
};

export default UserManagement;

*/