const express = require("express");
const cors = require("cors");
const { Routes } = require("./routes/Routes");

class App {
  #app;
  constructor() {
    this.#app = express();
    this.#app.use(
      cors()
      //   {
      //   origin: ["http://localhost", "https://news-frontend-khaki.vercel.app"]
      // }
    );
    this.#app.use(express.json());
    this.#app.use(new Routes().getRoute());
  }

  getApp() {
    return this.#app;
  }
}

module.exports = { App };
