// pages/auth/login.js
import { useState } from "react";
import { useRouter } from "next/router";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  // Manipular entrada dos inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar os dados para API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard"); // Redireciona para o sistema
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">{isLogin ? "Login" : "Cadastro"}</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full p-2 border rounded mb-2"
            onChange={handleChange}
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 mt-4">
          {isLogin ? "Criar uma conta" : "Já tem uma conta? Faça login"}
        </button>
      </div>
    </div>
  );
}
