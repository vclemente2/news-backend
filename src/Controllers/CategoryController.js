const db = require("../connection/database");

class CategoryController {
  static async findAll(_, res) {
    try {
      const categories = await db.Category.findAll();
      return res.json(categories);
    } catch {
      return res.status(500).json({ message: "Internal error." });
    }
  }

  static async create(req, res) {}
}

module.exports = { CategoryController };
