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
        type: DataTypes.TEXT
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      author: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      image_key: {
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
