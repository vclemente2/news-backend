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

  static init = () => {
    const server = new Server();
    server.app.listen(server.port, () => {
      console.log(`Server is running on port ${server.port}`);
    });
  };

  get app() {
    return this.#app;
  }

  get port() {
    return this.#port;
  }
}

Server.init();
