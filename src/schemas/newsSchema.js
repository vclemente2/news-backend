const Joi = require("joi");

const newsSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  author: Joi.string().allow("").trim(),
  category_id: Joi.number().integer().required(),
  image: Joi.string().allow("").trim()
});

module.exports = { newsSchema };
