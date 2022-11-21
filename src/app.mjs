import express from "express";
import { UserController } from "./modules/user/index.mjs";
import { httpMethods } from "./constants/index.mjs";
import {
  authJwtMiddleware,
  errorHandlerMiddleware,
} from "./middlewares/index.mjs";
import { AuthController } from "./modules/auth/index.mjs";

export class Application {
  #app;

  constructor() {
    this.#app = express();

    // Global Middlewares
    this.#app.use(express.json());

    // Controllers
    this.#setupControllers();

    // Error Handlers
    this.#app.use(errorHandlerMiddleware);
  }

  #setupControllers() {
    const controllers = [UserController, AuthController];

    for (const Controller of controllers) {
      const controllerInstance = new Controller();
      for (const route of controllerInstance.routes) {
        this.#setupRoute(route(), controllerInstance);
      }
    }
  }

  #setupRoute({ handler, path, method, middlewares, isPublic }, controller) {
    const fullPath = `${controller.prefix}${path}`;
    const handlers = [
      authJwtMiddleware,
      ...middlewares,
      handler.bind(controller),
    ];

    if (isPublic) {
      handlers.shift();
    }

    switch (method) {
      case httpMethods.GET:
        this.#app.get(fullPath, ...handlers);
        break;
      case httpMethods.POST:
        this.#app.post(fullPath, ...handlers);
        break;
      case httpMethods.DELETE:
        this.#app.delete(fullPath, ...handlers);
        break;
      case httpMethods.PUT:
        this.#app.put(fullPath, ...handlers);
        break;
      case httpMethods.PATCH:
        this.#app.patch(fullPath, ...handlers);
        break;
    }
  }

  listen(port, host, protocol = "http") {
    this.#app.listen(port, host, () => {
      console.log(`SERVER RUNNING ON ${protocol}://${host}:${port}`);
    });
  }
}
