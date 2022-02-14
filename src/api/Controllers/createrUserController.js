const createUserWorker = require("../Services/createUserWorker");

async function createUserController(req) {
  const createdUser = await createUserWorker(req);
  return createdUser;
}
module.exports = createUserController;
