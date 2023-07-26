const { ApiError } = require("../errors/ApiError");
const { CategoryService } = require("../services/CategoryService");

class CategoryController {
  #service;

  constructor() {
    this.#service = new CategoryService();
  }

  create = async (req, res) => {
    const data = req.body;

    const existsCategory = await this.#service.findByName(data.name);

    if (existsCategory) throw new ApiError(409, "Category already exists");

    const newCategory = await this.#service.create(data);

    if (!newCategory) throw new ApiError(500);

    return res.status(201).json(newCategory);
  };

  findAll = async (_, res) => {
    const categories = await this.#service.findAll();
    return res.json(categories);
  };
}

module.exports = { CategoryController };
