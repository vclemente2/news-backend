const db = require("../connection/database");
const { ApiError } = require("../errors/ApiError");

class NewsController {
  static async create(req, res) {
    const data = req.body;

    try {
      const createdNews = await db.News.create(data);

      if (!createdNews) throw new ApiError("Internal error.", 500);

      return res.status(201).json(createdNews);
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }

  static async findAll(req, res) {}
}

module.exports = { NewsController };
