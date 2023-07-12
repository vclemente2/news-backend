const express = require("express");
const cors = require("cors");

class App {
  #app;
  constructor() {
    this.#app = express();
    this.#app.use(cors());
    this.#app.use(express.json());
    this.#app.get("/", (_, res) =>
      res.json({
        version: "1.0.0",
        description: "News API",
        author: "Vinicius Bastos Clemente"
      })
    );
  }

  getApp() {
    return this.#app;
  }
}

module.exports = { App };
