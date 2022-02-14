const dotenv = require("dotenv");
const express = require("express");
const routes = require("./Routes/index.js");
var bodyParser = require("body-parser");
const sequelize = require("./Database/database.js");
const cors = require("cors");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.database = sequelize;
  }

  middlewares() {
    this.server.use(bodyParser.urlencoded({ extended: false })); //para forms
    this.server.use(bodyParser.json()); //para json
    //this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;

/* 
database() {
    const sequelize = new Sequelize(
      process.env.POSTGRES_DB,
      process.env.POSTGRES_USER,
      process.env.POSTGRES_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectModule: pg,
      }
    );
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });
  }


*/
