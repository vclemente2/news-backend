class BodyValidation {
  static validate(schema) {
    return async (req, res, next) => {
      try {
        req.body = await schema.validateAsync(req.body);
        next();
      } catch (error) {
        return res.status(422).json({ message: error.message });
      }
    };
  }
}

module.exports = { BodyValidation };
