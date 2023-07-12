const Joi = require("joi");

const categorySchema = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/)
    .trim()
    .required()
});

module.exports = { categorySchema };
