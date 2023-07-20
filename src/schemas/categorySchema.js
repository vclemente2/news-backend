const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/)
    .trim()
    .required(),
  color: Joi.string().trim()
});

module.exports = { categorySchema };
