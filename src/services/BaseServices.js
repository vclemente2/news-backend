const { ApiError } = require("../errors/ApiError");

class BaseServices {
  #model;
  #db;
  constructor(modelName) {
    this.#model = modelName;
    this.#db = require("../connection/database");
  }

  get db() {
    return this.#db;
  }
  get model() {
    return this.#model;
  }

  create = async (data) => {
    const createdData = await this.db[this.model].create(data);

    if (!createdData) throw new ApiError(500);

    return createdData;
  };

  findAll = async () => {
    const data = await this.db[this.model].findAll();

    return data;
  };
}

module.exports = { BaseServices };
