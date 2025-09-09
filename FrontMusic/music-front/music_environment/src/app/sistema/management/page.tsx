"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

interface Student {
  id: number;
  Nome: string;
  Sobrenome: string;
  WhatsApp: string;
  InstrumentoPref: string;
  Localidade: string;
}

const StudentsManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [newStudent, setNewStudent] = useState<Student>({
    id: 0,
    Nome: "",
    Sobrenome: "",
    WhatsApp: "",
    InstrumentoPref: "",
    Localidade: "",
  });
  const [userName, setUserName] = useState<string>(""); // Nome fornecido pelo usuário
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false); // Controle de acesso
  const [openDialog, setOpenDialog] = useState(false);
  const [userToken, setUserToken] = useState<string>("");

  // Busca o token do usuário autenticado
  const fetchUserToken = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Usuário não autenticado! Faça login.");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8000/user/token/", {
        headers: { Authorization: `Token ${token}` },
      });

      if (response.data.token) {
        setUserToken(response.data.token);
        console.log("Token do usuário:", response.data.token);
      } else {
        alert("Erro ao obter token do usuário.");
      }
    } catch (error) {
      console.error("Erro ao buscar token:", error);
    }
  };


  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Usuário não autenticado! Por favor, faça login.");
        return; // Interrompe a execução se não houver token
      }
  
      const response = await axios.get("http://127.0.0.1:8000/user_data/", {
        params: { name: userName }, // Envia o nome via query string
        headers: { Authorization: `Token ${token}` },
      });
  
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log("Dados do usuário:", response.data);
        setStudents([response.data]); // Preenche a lista apenas com os dados do usuário autenticado
        setIsAuthorized(true);
        alert("Acesso autorizado!"); // Exibe alerta de sucesso
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  };

  // Pegar os dados do usuário logado no Backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/Urls/ViewsStudy/");
      setStudents(response.data);
    } catch (error) {
      console.error("Erro ao buscar alunos:", error);
    }
  };

  const deleteStudent = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/Urls/ViewsStudy/${id}/`);
      setStudents(students.filter((student) => student.id !== id));
      alert("Registro excluído com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir registro:", error);
    }
  };

  const updateStudent = async () => {
    if (!editingStudent) return;
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/Urls/ViewsStudy/${editingStudent.id}/`,
        editingStudent
      );
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id ? response.data : student
        )
      );
      setEditingStudent(null);
      setOpenDialog(false);
      alert("Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  const addStudent = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/Urls/ViewsStudy/",
        newStudent
      );
      setStudents([...students, response.data]);
      setNewStudent({
        id: 0,
        Nome: "",
        Sobrenome: "",
        WhatsApp: "",
        InstrumentoPref: "",
        Localidade: "",
      });
      alert("Novo registro adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar registro:", error);
    }
  };

  
  useEffect(() => {
    if (isAuthorized) {
      fetchUserData();
    }
    fetchStudents();
    fetchUserToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthorized]);


  return (
    <Container>
      {!isAuthorized ? (
        <>
          <Typography variant="h5" gutterBottom>
            Autenticação do Usuário
          </Typography>
          <TextField
            label="Digite seu Nome"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={fetchUserData}>
            Validar
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Gerenciamento de Dados Pessoais
          </Typography>
          <Typography variant="body1">
            Token do Usuário: {userToken || "Não encontrado"}
          </Typography>
          <List>
            {students.map((student) => (
              <ListItem key={student.id}>
                <ListItemText
                  primary={`${student.Nome} ${student.Sobrenome}`}
                  secondary={`${student.InstrumentoPref} - ${student.Localidade}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    color="primary"
                    onClick={() => {
                      setEditingStudent(student);
                      setOpenDialog(true);
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    edge="end"
                    color="secondary"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom>
            Adicionar Novos Dados
          </Typography>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={newStudent.Nome}
            onChange={(e) => setNewStudent({ ...newStudent, Nome: e.target.value })}
          />
          <TextField
            label="Sobrenome"
            fullWidth
            margin="normal"
            value={newStudent.Sobrenome}
            onChange={(e) =>
              setNewStudent({ ...newStudent, Sobrenome: e.target.value })
            }
          />
          <TextField
            label="WhatsApp"
            fullWidth
            margin="normal"
            value={newStudent.WhatsApp}
            onChange={(e) =>
              setNewStudent({ ...newStudent, WhatsApp: e.target.value })
            }
          />
          <TextField
            label="Instrumento Preferido"
            fullWidth
            margin="normal"
            value={newStudent.InstrumentoPref}
            onChange={(e) =>
              setNewStudent({ ...newStudent, InstrumentoPref: e.target.value })
            }
          />
          <TextField
            label="Localidade"
            fullWidth
            margin="normal"
            value={newStudent.Localidade}
            onChange={(e) =>
              setNewStudent({ ...newStudent, Localidade: e.target.value })
            }
          />
          <Button variant="contained" color="primary" onClick={addStudent}>
            Adicionar
          </Button>

          {editingStudent && (
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>Editar Dados</DialogTitle>
              <DialogContent>
                <TextField
                  label="Nome"
                  fullWidth
                  margin="normal"
                  value={editingStudent.Nome}
                  onChange={(e) =>
                    setEditingStudent({ ...editingStudent, Nome: e.target.value })
                  }
                />
                {/* Outros campos de edição... */}
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={() => setOpenDialog(false)}
                  color="secondary"
                >
                  Cancelar
                </Button>
                <Button onClick={updateStudent} color="primary">
                  Salvar
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </>
      )}
    </Container>
  );
};

export default StudentsManager;