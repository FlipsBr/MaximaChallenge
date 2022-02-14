const createUserWorker = require("../Services/createUserWorker");

async function createUserController(req) {
  const createdUser = await createUserWorker(req);
  console.log("no controller...", createdUser);
  return createdUser;
}
module.exports = createUserController;
