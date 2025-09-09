import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import db from "@/database";
import User from "@/database/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "Usuário não encontrado!" });

    // Verifica a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Senha incorreta!" });

    // Gera um token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor!" });
  }
}
