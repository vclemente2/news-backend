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

  static async findAll(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 6;
      const offset = (Number(page) - 1) * limit;

      const news = await db.News.findAll({
        include: "category"
      });

      const lastPage = Math.ceil(news.length / limit);

      const paginate =
        Number(page) === lastPage
          ? news.slice(offset)
          : news.slice(offset, limit);

      return res.json({ news: paginate, page: Number(page), lastPage });
    } catch (error) {
      const message = error.statusCode ? error.message : "Internal error.";
      return res.status(error.statusCode || 500).json({ message });
    }
  }
}

module.exports = { NewsController };
