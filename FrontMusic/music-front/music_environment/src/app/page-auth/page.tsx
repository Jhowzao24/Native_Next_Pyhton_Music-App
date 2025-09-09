"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Toaster, toast } from "react-hot-toast";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboards");
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLogin === null) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateUsername = (username: string) => {
    const regex = /^[a-zA-Z0-9@./+/_-]+$/; // Regex para validar o username
    return regex.test(username);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Valida o nome de usuário
    if (!isLogin && !validateUsername(formData.username)) {
        toast.error("O nome de usuário contém caracteres inválidos. Use apenas letras, números ou @/./+/-/_");
        return;
    }

    // Valida os campos obrigatórios
    if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
        toast.error("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const endpoint = isLogin
        ? "http://127.0.0.1:8000/login/"
        : "http://127.0.0.1:8000/register/";

    const loadingToastId = toast.loading(isLogin ? "Entrando..." : "Cadastrando...");

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        // Verifica a resposta da API
        if (!res.ok) {
            toast.dismiss(loadingToastId);

          // Exibe mensagem de sucesso
            toast.success(isLogin ? "Login realizado com sucesso!" : "Cadastro realizado com sucesso!");
            const errorData = await res.json(); // Tenta obter o corpo da resposta com detalhes
            console.error("Erro na API:", errorData);
            toast.error(errorData.message || "Erro ao processar a solicitação.");
            return;
        }

        const data = await res.json();

        if (!data || Object.keys(data).length === 0) {
            console.error("Resposta vazia da API.");
            toast.error("Nenhum dado foi retornado pelo servidor.");
            return;
        }

        // Sucesso: Armazena o token e redireciona
          localStorage.setItem("token", data.access);
           router.push("/dashboards");
        } catch (error) {
        // Captura erros inesperados
          toast.dismiss(loadingToastId);
          console.error("Erro ao se comunicar com o servidor:", error);
          toast.error("Ocorreu um erro inesperado. Tente novamente mais tarde.");
        }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div style={{backgroundColor: 'aliceblue', padding: '90px', backgroundSize: "cover",  backgroundRepeat: "no-repeat", borderColor: 'Highlight', borderStyle: 'double', borderRadius: '30px'}}>
        <div>
          <MusicNoteIcon fontSize="large" style={{ color: "purple" }} />
          <h2
            suppressHydrationWarning
            style={{
              fontFamily: "sans-serif",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {isLogin ? "Bem-vindo de volta!" : "Junte-se à música!"}
          </h2>
        </div>
        <form className="mt-4" onSubmit={handleSubmit}>
          {/* Campo de Nome de Usuário - Somente para Cadastro */}
          {!isLogin && (
            <div>
            <Input
              type="text"
              name="username"
              placeholder="Nome de Usuário"
              fullWidth
              onChange={handleChange}
              value={formData.username}
              style={{
                marginBottom: "1rem",
                padding: "15px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                fontSize: "1rem",
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid #ddd",
              }}
            />
            <small style={{ backgroundColor: 'gray', color: "yellow", fontFamily: "sans-serif", letterSpacing: "5px" }}>
                O nome de usuário pode conter apenas letras, números e os caracteres @/./+/-/_.
            </small>
            </div>
          )}
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            fullWidth
            onChange={handleChange}
            value={formData.email}
            style={{
              marginBottom: "1rem",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              fontSize: "1rem",
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid #ddd",
            }}
          />
          <Input
            type={mostrarSenha ? "text" : "password"}
            name="password"
            placeholder="Senha"
            fullWidth
            onChange={handleChange}
            value={formData.password}
            style={{
              marginBottom: "1rem",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              fontSize: "1rem",
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid #ddd",
            }}
          />
          <Button
            type="button"
            onClick={() => setMostrarSenha(!mostrarSenha)}
            style={{
              backgroundColor: "lightcyan",
              color: "Highlight",
              borderRadius: "60px",
              fontSize: "11px"
            }}
          >
            {mostrarSenha ? "Hide password" : "Show Password"}
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            style={{ backgroundColor: "Blue", color: "white", marginBottom: "10px" }}
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </Button>
        </form>
        <Button
          onClick={() => {
            setIsLogin(!isLogin);
            // Limpa o campo de nome de usuário ao trocar para login
            setFormData({ ...formData, username: "" });
          }}
          fullWidth
          variant="text"
          style={{ color: "Highlight" }}
        >
          {isLogin ? "Criar uma conta" : "Já tem uma conta? Faça login"}
        </Button>
        {isLogin && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a
              href="/password-reset/request"
              style={{
                color: "Highlight",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Esqueceu sua senha?
            </a>
          </div>
        )}
      </div>
      <Toaster/>
    </div>
  );
}
