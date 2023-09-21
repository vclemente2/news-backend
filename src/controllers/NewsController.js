const { ApiError } = require("../errors/ApiError");
const { NewsService } = require("../services/NewsService");

class NewsController {
  #service;

  constructor() {
    this.#service = new NewsService();
  }

  create = async (req, res) => {
    const data = req.body;
    const image = req.file;

    const createdNews = image
      ? await this.#service.create(data, image)
      : await this.#service.create(data);

    if (!createdNews) throw new ApiError(500);

    return res.status(201).json(createdNews);
  };

  paginate = async (req, res) => {
    const { page } = req.query;

    const news = await this.#service.paginate(page);

    return res.json(news);
  };

  findAll = async (_, res) => {
    const news = await this.#service.findAll();

    return res.json(news);
  };

  destroy = async (req, res) => {
    const { id } = req.params;
    const news = await this.#service.destroy(id);

    return res.json(news);
  };
}

module.exports = { NewsController };
