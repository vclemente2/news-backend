const express = require("express");
const cors = require("cors");
const { Routes } = require("./routes/Routes");

class App {
  #app;
  constructor() {
    this.#app = express();
    this.#app.use(
      cors({ origin: "https://cute-tan-buffalo-cuff.cyclic.app/" })
    );
    this.#app.use(express.json());
    this.#app.use(new Routes().getRoute());
  }

  getApp() {
    return this.#app;
  }
}

module.exports = { App };
