const db = require("../connection/database");

class CategoryController {
  static async findAll(_, res) {
    try {
      const categories = await db.Category.findAll();
      return res.json(categories);
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }

  static async create(req, res) {
    const data = req.body;

    try {
      const newCategory = await db.Category.create(data);

      if (!newCategory) throw new ApiError("Internal error.", 500);

      return res.status(201).json(newCategory);
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }
}

module.exports = { CategoryController };
