const { Router } = require("express");
const { CategoryController } = require("../controllers/CategoryController");
const { BodyValidation } = require("../middlewares/bodyValidationMiddleware");
const { NewsController } = require("../controllers/NewsController");
const { categorySchema } = require("../schemas/categorySchema");
const { newsSchema } = require("../schemas/newsSchema");
const { upload } = require("../config/multer");

class Routes {
  #route;
  #categoryController = new CategoryController();
  #newsController = new NewsController();

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
      .get("/category", this.#categoryController.findAll)
      .post(
        "/category",
        BodyValidation.validate(categorySchema),
        this.#categoryController.create
      )
      .get("/news/all", this.#newsController.findAll)
      .get("/news", this.#newsController.paginate)
      .post(
        "/news",
        upload.single("image"),
        BodyValidation.validate(newsSchema),
        this.#newsController.create
      );
  }

  getRoute() {
    return this.#route;
  }
}

module.exports = { Routes };
