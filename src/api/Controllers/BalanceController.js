const { balanceGetter, balanceUpdater } = require("../Services/BalanceWorker");

async function balanceGetterController(req) {
  console.log("balanceGetterController");
  const response = await balanceGetter(req);
  console.log(response);
  return response;
}

async function balanceUpdaterController(req) {
  console.log("balanceGetterController");
  const response = await balanceUpdater(req);
  console.log(response);
  return response;
}

module.exports = balanceGetterController;
