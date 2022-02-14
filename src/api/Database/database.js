const config = require("./config.js");
const { Sequelize } = require("sequelize");
const { decodeBase64 } = require("bcryptjs");
//const Usuario = require("../Models/Usuario.js");

const sequelize = new Sequelize(config);

const db = {};
console.log(sequelize.sequelize);
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Usuario = sequelize.define("Usuario", {
  login: {
    type: Sequelize.STRING,
    primaryKey: true,
    required: true,
  },
  senha: {
    type: Sequelize.STRING,
    required: true,
  },
  nome: {
    type: Sequelize.STRING,
    required: false,
  },
});

const Movimentacao = sequelize.define(
  "Movimentacao",
  {
    id_transacao: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: Sequelize.DATE,
      required: true,
    },
    login_origem: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    login_destino: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    valor_transferido: {
      type: Sequelize.FLOAT(8),
      required: true,
      allowNull: false,
    },
  },
  {
    tableName: "Movimentacao",
  }
);

const Saldo = sequelize.define("Saldo", {
  login: {
    type: Sequelize.STRING,
    primaryKey: true,
    required: true,
    foreignKey: Usuario.login,
  },
  saldo: {
    type: Sequelize.FLOAT(8),
    required: true,
    defaultValue: 100,
  },
});
/*Usuario.hasMany(Movimentacao);
Movimentacao.belongsToMany(Usuario, {
  as: "login",
  through: "Movimentacao_historico",
  foreignKey: "login",
});
Saldo.belongsTo(Usuario, { foreignKey: "login" });*/

sequelize.sync({ alter: true, logging: false });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { sequelize, db, Usuario, Movimentacao, Saldo };
