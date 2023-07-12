const { Router } = require("express");
const { CategoryController } = require("../Controllers/CategoryController");
const { BodyValidation } = require("../middlewares/bodyValidationMiddleware");
const { NewsController } = require("../Controllers/NewsController");
const { categorySchema } = require("../schemas/categorySchema");

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
      .post(
        "/category",
        BodyValidation.validate(categorySchema),
        CategoryController.create
      )
      .get("/news", NewsController.findAll)
      .post("/news", NewsController.create);
  }

  getRoute() {
    return this.#route;
  }
}

module.exports = { Routes };
