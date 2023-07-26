const express = require("express");
const cors = require("cors");
const { Routes } = require("./routes/Routes");
const { ErrorMiddleware } = require("./middlewares/ErrorMiddleware");

class App {
  #app;
  constructor() {
    this.#app = express();
    this.#app.use(cors());
    this.#app.use(express.json());
    this.#app.use(new Routes().getRoute());
    this.#app.use(ErrorMiddleware.CatchError);
  }

  getApp() {
    return this.#app;
  }
}

module.exports = { App };
