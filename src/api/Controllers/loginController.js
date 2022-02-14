const loginWorker = require("../Services/LoginWorker.js");

async function loginController(req) {
  const response = await loginWorker(req);
  return response;
}

module.exports = loginController;
