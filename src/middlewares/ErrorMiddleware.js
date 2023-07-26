class ErrorMiddleware {
  static CatchError(error, req, res, next) {
    const status = error.statusCode ? error.statusCode : 500;
    const message = error.statusCode ? error.message : "Internal server error.";

    console.log(error);
    return res.status(status).json({ message });
  }
}

module.exports = { ErrorMiddleware };
