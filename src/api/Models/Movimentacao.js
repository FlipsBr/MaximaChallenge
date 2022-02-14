const Movimentacao = sequelize.define("Movimentacao", {
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
  },
  login_destino: {
    type: Sequelize.STRING,
    required: true,
  },
  valor_transferido: {
    type: Sequelize.FLOAT(8),
    required: true,
  },
});

module.exports = Movimentacao;
