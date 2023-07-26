const { BaseServices } = require("./BaseServices");

class CategoryService extends BaseServices {
  constructor() {
    super("Category");
  }

  findByName = async (categoryName) => {
    return this.db[this.model].findOne({
      where: { name: categoryName }
    });
  };
}

module.exports = { CategoryService };
