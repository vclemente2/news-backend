const { Router } = require("express");
const { CategoryController } = require("../Controllers/CategoryController");

class Routes {
  #route;

  constructor() {
    this.#route = Router();
    this.#route
      .get("/", (_, res) =>
        res.json({
          version: "1.0.0",
          description: "News API",
          author: "Vinicius Bastos Clemente"
        })
      )
      .get("/category", CategoryController.findAll)
      .post("/category", CategoryController.create)
      .get("/news", () => {})
      .post("/news", () => {});
  }

  getRoute() {
    return this.#route;
  }
}

module.exports = { Routes };
