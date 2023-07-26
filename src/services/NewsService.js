const { ApiError } = require("../errors/ApiError");
const { BaseServices } = require("./BaseServices");

class NewsService extends BaseServices {
  constructor() {
    super("News");
  }

  paginate = async (page) => {
    const pageNumber = Number(page) || 1;
    const limit = 6;
    const offset = (pageNumber - 1) * limit;

    if (pageNumber < 0)
      throw new ApiError(409, "The page number must be a positive number.");

    const news = await this.db[this.model].findAll({
      include: "category",
      order: [["updatedAt", "DESC"]]
    });

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
