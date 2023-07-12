class ApiError extends Error {
  #statusCode;
  constructor(message, statusCode) {
    super(message);
    this.#statusCode = statusCode;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

module.exports = { ApiError };
