const { Router } = require("express");
const { CategoryController } = require("../Controllers/CategoryController");
const { BodyValidation } = require("../middlewares/bodyValidationMiddleware");
const { NewsController } = require("../Controllers/NewsController");
const { categorySchema } = require("../schemas/categorySchema");
const { newsSchema } = require("../schemas/newsSchema");

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
      .get("/news/all", NewsController.findAll)
      .get("/news", NewsController.paginate)
      .post(
        "/news",
        BodyValidation.validate(newsSchema),
        NewsController.create
      );
  }

  getRoute() {
    return this.#route;
  }
}

module.exports = { Routes };
