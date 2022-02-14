const { balanceUpdater } = require("../Services/BalanceWorker");
const movimentacaoWorker = require("../Services/MovimentacaoWorker");

async function movimentacaoController(req) {
  const movimentacao = await movimentacaoWorker(req);
  const update = await balanceUpdater(req);

  return movimentacao;
}
module.exports = movimentacaoController;
