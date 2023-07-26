const db = require("../connection/database");
const { ApiError } = require("../errors/ApiError");

class NewsController {
  static async create(req, res) {
    const data = req.body;

    const createdNews = await db.News.create(data);

    if (!createdNews) throw new ApiError(500);

    return res.status(201).json(createdNews);
  }

  static async paginate(req, res) {
    const { page = 1 } = req.query;
    const limit = 6;
    const offset = (Number(page) - 1) * limit;

    const news = await db.News.findAll({
      include: "category",
      order: [["updatedAt", "DESC"]]
    });

    const lastPage = Math.ceil(news.length / limit);

    const paginate =
      Number(page) === lastPage
        ? news.slice(offset)
        : news.slice(offset, limit);

    return res.json({ news: paginate, page: Number(page), lastPage });
  }

  static async findAll(req, res) {
    const news = await db.News.findAll({
      order: [["updatedAt", "DESC"]],
      include: "category"
    });

    return res.json(news);
  }
}

module.exports = { NewsController };
