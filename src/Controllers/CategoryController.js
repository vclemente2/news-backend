const db = require("../connection/database");
const { ApiError } = require("../errors/ApiError");

class CategoryController {
  static async create(req, res) {
    const data = req.body;

    const existsCategory = await db.Category.findOne({
      where: { name: data.name }
    });

    if (existsCategory) throw new ApiError("Category already exists", 409);

    const newCategory = await db.Category.create(data);

    if (!newCategory) throw new ApiError("Internal error.", 500);

    return res.status(201).json(newCategory);
  }

  static async findAll(_, res) {
    const categories = await db.Category.findAll();
    return res.json(categories);
  }
}

module.exports = { CategoryController };
