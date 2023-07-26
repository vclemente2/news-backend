const { ApiError } = require("../errors/ApiError");
const { BaseServices } = require("./BaseServices");
const { S3Service } = require("./S3Service");

class NewsService extends BaseServices {
  constructor() {
    super("News");
  }

  create = async (data, file = null) => {
    const result = await this.db.sequelize.transaction(async (t) => {
      const createdNews = await super.create(data, t);

      if (file) {
        const { url } = await S3Service.create(file, createdNews.id);

        const createdNewsWithImage = await super.update(
          { image: url },
          { where: { id: createdNews.id } },
          t
        );

        return createdNewsWithImage[0];
      }

      return createdNews;
    });

    return result;
  };

  findAll = async () => {
    return this.db[this.model].findAll({
      order: [["updatedAt", "DESC"]],
      include: "category"
    });
  };

  paginate = async (page) => {
    const pageNumber = Number(page) || 1;
    const limit = 6;
    const offset = (pageNumber - 1) * limit;

    if (pageNumber < 0)
      throw new ApiError(409, "The page number must be a positive number.");

    const news = await this.findAll();

    const lastPage = Math.ceil(news.length / limit);

    if (pageNumber > lastPage)
      throw new ApiError(
        409,
        `The page number should not be longer than the last page number (${lastPage})`
      );

    const newsPaginate = news.slice(offset, offset + limit);

    return {
      news: newsPaginate,
      page: pageNumber,
      lastPage
    };
  };
}

module.exports = { NewsService };
