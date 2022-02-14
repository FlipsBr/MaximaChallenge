const { Op } = require("sequelize");
const db = require("../Database/database");

async function movimentacaoWorker(req) {
  let { login_origem, login_destino, valor_origem, UsuarioLogin } = req.body;
  console.log(req.body);
  const valor_transferido = Number(valor_origem);
  const data = new Date().toISOString("pt-br");

  const createMovimentacao = await db.Movimentacao.create({
    login_origem,
    login_destino,
    valor_transferido,
    data,
  });
  return createMovimentacao;
}

module.exports = movimentacaoWorker;
