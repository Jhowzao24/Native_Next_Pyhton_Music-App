// eslint-disable-next-line @typescript-eslint/no-require-imports
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Hire_Database", "Jhonny_User_Wesley", "wesley6655", {
  host: "localhost", // Ou IP do servidor SQL Server
  dialect: "mssql", // Define que estamos usando SQL Server
  port: 1433, // Porta padrão do SQL Server
  dialectOptions: {
    options: {
      encrypt: false, // Se precisar de criptografia, mude para true
      trustServerCertificate: true, // Se estiver rodando localmente, pode precisar disso
    },
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado com sucesso!");
  } catch (error) {
    console.error("❌ Erro na conexão:", error);
  }
}

testConnection();

module.exports = sequelize;
