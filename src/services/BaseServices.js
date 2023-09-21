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

  async findOne(id) {
    const data = await this.db[this.model].findByPk(id);

    if (!data) throw new ApiError(404, "Register not found.");

    return data;
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

  async destroy(id, transaction = null) {
    const [count] = await this.db[this.model].destroy({
      where: { id },
      transaction: transaction
    });

    if (!count) throw new ApiError(404, "Register not found.");
  }
}

module.exports = { BaseServices };
