const db = require("../connection/database");
const { ApiError } = require("../errors/ApiError");
const { NewsService } = require("../services/NewsService");

class NewsController {
  #service;

  constructor() {
    this.#service = new NewsService();
  }

  create = async (req, res) => {
    const data = req.body;

    const createdNews = await this.#service.create(data);

    if (!createdNews) throw new ApiError(500);

    return res.status(201).json(createdNews);
  };

  paginate = async (req, res) => {
    const { page } = req.query;

    const news = await this.#service.paginate(page);

    return res.json(news);
  };

  findAll = async (req, res) => {
    const news = await db.News.findAll({
      order: [["updatedAt", "DESC"]],
      include: "category"
    });

    return res.json(news);
  };
}

module.exports = { NewsController };
