//const pg = require("pq");
require("dotenv/config");

module.exports = {
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_SERVICE_HOST,
  dialect: "postgres",
  port: process.env.POSTGRES_SERVICE_PORT,
};
