const db = require("../connection/database");
const { ApiError } = require("../errors/ApiError");

class CategoryController {
  static async create(req, res) {
    const data = req.body;

    try {
      const existsCategory = await db.Category.findOne({
        where: { name: data.name }
      });

      if (existsCategory) throw new ApiError("Category already exists", 409);

      const newCategory = await db.Category.create(data);

      if (!newCategory) throw new ApiError("Internal error.", 500);

      return res.status(201).json(newCategory);
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }

  static async findAll(_, res) {
    try {
      const categories = await db.Category.findAll();
      return res.json(categories);
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }
}

module.exports = { CategoryController };
