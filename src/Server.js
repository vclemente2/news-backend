require("dotenv").config();
require("express-async-errors");

const { App } = require("./App");

class Server {
  #app;
  #port;
  constructor() {
    this.#app = new App().getApp();
    this.#port = process.env.PORT;
  }

  init = () => {
    this.#app.listen(this.#port, () => {
      console.log(`Server is running on port ${this.#port}`);
    });
  };
}

new Server().init();
