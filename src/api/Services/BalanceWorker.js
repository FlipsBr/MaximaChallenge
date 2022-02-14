const { Saldo, Movimentacao } = require("../Database/database.js");
const { Op } = require("sequelize");
const db = require("../Database/database");

async function balanceGetter(req, res) {
  let { login } = req.body;
  const response = await db.Saldo.findAll({ where: { login } }, { raw: true });
  console.log(response);
  return response;
}

async function balanceUpdater(req) {
  let { login_origem, valor_origem, login_destino } = req.body;

  console.log("no updater", req.body);
  const valor_transferido = Number(valor_origem);
  console.log(typeof valor_transferido);

  const saldoAtualOrigem = await db.Saldo.findAll({
    where: { login: login_origem },
    plain: true,
    raw: true,
  });
  const saldoAtualDestino = await db.Saldo.findAll({
    where: { login: login_destino },
    plain: true,
    raw: true,
  });

  console.log(saldoAtualDestino);
  console.log(saldoAtualOrigem);

  saldoAtualOrigem.saldo = valor_transferido;
  saldoAtualDestino.saldo = valor_transferido;

  await saldoAtualOrigem.save();
  await saldoAtualDestino.save();
  /*const updateSaldoOrigem = await db.Saldo.update(
    { saldo: saldoOrigem - valor_transferido },
    { where: { [Op.eq]: login_origem } }
  );
  const updateSaldoDestino = await db.Saldo.update(
    { saldo: saldoDestino + valor_transferido },
    { where: { [Op.eq]: login_destino } }
  );*/
  // console.log(updateSaldoDestino);

  return [updateSaldoOrigem, updateSaldoDestino];
}

module.exports = { balanceGetter, balanceUpdater };
