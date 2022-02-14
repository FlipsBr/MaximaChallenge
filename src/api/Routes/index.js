const { Router, request, response } = require("express");

//import loginController from "../Controllers/loginController.js";
const createUserController = require("../Controllers/createrUserController");
const loginController = require("../Controllers/loginController");
const balanceGetterController = require("../Controllers/BalanceController");
const movimentacaoController = require("../Controllers/movimentacaoController");

const routes = Router();
routes.post("/login", async function(req, res, next) {
  const response = await loginController(req);
  if (response) {
    console.log("na route", response);

    res.json(response);
  } else return res.sendStatus(404);
});
routes.post("/balance", async function(req, res, next) {
  const response = await balanceGetterController(req);
  console.log(response);
  res.send(response);
});

routes.post("/user/create", async function(req, res, next) {
  try {
    const response = await createUserController(req, res);
    console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

routes.post("/movimentacao/create", async function(req, res, next) {
  try {
    const response = await movimentacaoController(req, res);
    console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// routes.post("/balance", (req, res, next) => {
//   balanceController;
//   console.log(req.body);
// });
module.exports = routes;
