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

  async create(data, transaction = null) {
    const createdData = await this.db[this.model].create(data, {
      transaction: transaction
    });

    if (!createdData) throw new ApiError(500);

    return createdData;
  }

  async findAll() {
    const data = await this.db[this.model].findAll();

    return data;
  }

  async update(data, where, transaction = null) {
    const [numOfRowsAffected, updatedData] = await this.db[this.model].update(
      data,
      {
        ...where,
        returning: true,
        transaction: transaction
      }
    );

    if (!numOfRowsAffected) throw new ApiError(404, "Register not found.");

    return updatedData;
  }
}

module.exports = { BaseServices };
