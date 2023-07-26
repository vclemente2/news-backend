class ApiError extends Error {
  #statusCode;
  constructor(statusCode, message = "") {
    super(message);
    this.#statusCode = statusCode;
  }

  get statusCode() {
    return this.#statusCode;
  }
}

module.exports = { ApiError };
