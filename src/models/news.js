"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category"
      });
    }
  }
  News.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      author: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "News"
    }
  );
  return News;
};
