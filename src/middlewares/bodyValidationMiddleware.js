const { ApiError } = require("../errors/ApiError");

class BodyValidation {
  static validate(schema) {
    return async (req, _, next) => {
      try {
        req.body = await schema.validateAsync(req.body);
        next();
      } catch (error) {
        throw new ApiError(error.message, 422);
      }
    };
  }
}

module.exports = { BodyValidation };
