const db = require("../Database/database");

async function createUserWorker(req, res) {
  let { login, senha, nome } = req.body;

  try {
    const createdUser = await db.Usuario.create({ login, senha, nome }).then(
      await db.Saldo.create({ login, saldo: 100 })
    );

    console.log("no worker", createdUser);
    return createdUser;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = createUserWorker;
