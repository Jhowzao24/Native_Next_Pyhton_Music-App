import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/database/models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "E-mail já cadastrado!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(201).json({ token });
  } catch {
    return res.status(500).json({ message: "Erro no servidor!" });
  }
}
