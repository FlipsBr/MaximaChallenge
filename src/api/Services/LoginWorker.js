const Usuario = require("../Models/Usuario.js");
// import { Salt, jwtSecret, tokenTimer } from "../constants/secret.js";
const sign = require("jsonwebtoken");
const compare = require("bcryptjs");
const db = require("../Database/database");
const { Op } = require("sequelize");

const Salt = "SaltTeste";
const jwtSecret = "jwtSecret";
const tokenTimer = 360000;

async function loginWorker2() {
  /* Chece se o user existe. */
  let exists = await Usuario.exists({ email: req.body.email });
  console.log(req.body);
  if (!exists) {
    return res.status(401).send("user doesn't exist.");
  }
  /* Caso Password esteja errado.*/
  let user = await Usuario.findOne({ email: req.body.email });
  const isValidPassword = compare(user.password, req.body.password + Salt);
  if (!isValidPassword) {
    return res.sendStatus(401);
  }

  /* Se o password está certo, é gerado o token. */
  let token = sign({ id: user._id }, jwtSecret, { expiresIn: tokenTimer });
  console.log("teste", token);
  return res.send({
    user,
    token,
  });
}

async function loginWorker(req) {
  const { login, senha } = req.body;

  const exists = await db.Usuario.findOne({
    where: { [Op.and]: [{ login }, { senha }] },
  });
  if (exists) {
    return exists.dataValues;
  } else return null;
}

module.exports = loginWorker;
