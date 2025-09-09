/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "@/database"; // Importe a conexão com o banco de dados
import User from "@/database/models/User"; // O modelo do usuário

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  try {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "E-mail já cadastrado!" });

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário
    const newUser = await User.create({ email, password: hashedPassword });

    // Gera um token JWT
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor!" });
  }
}
