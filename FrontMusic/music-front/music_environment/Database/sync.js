// eslint-disable-next-line @typescript-eslint/no-require-imports
const sequelize = require("./database");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const User = require("./Model/User");

(async () => {
  try {
    await sequelize.sync({ force: true }); // Ou { alter: true } para evitar perda de dados
    console.log("📌 Banco de dados sincronizado com sucesso!");

    // Criar um usuário de teste
    await User.create({
      nome: "Usuário Teste",
      email: "teste@email.com",
    });

    console.log("✅ Usuário criado com sucesso!");
    process.exit();
  } catch (error) {
    console.error("❌ Erro ao sincronizar o banco:", error);
    process.exit(1);
  }
})();
