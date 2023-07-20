const Joi = require("joi");

const newsSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  author: Joi.string().trim(),
  category_id: Joi.number().integer().required(),
  image: Joi.string().trim()
});

module.exports = { newsSchema };
