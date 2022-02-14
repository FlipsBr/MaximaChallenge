const Saldo = Sequelize.define("Saldo", {
  login: {
    type: Sequelize.STRING,
    primaryKey: true,
    required: true,
  },
  saldo: {
    type: Sequelize.FLOAT(8),
    required: true,
    defaultValue: 100,
  },
});

await Saldo.sync();
export default Saldo;
