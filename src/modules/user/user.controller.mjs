import { Controller, Route } from "../../classes/index.mjs";
import { UserService } from "./user.service.mjs";

export class UserController extends Controller {
  #service;

  constructor() {
    super("/users");
    this.#service = new UserService();
  }

  get routes() {
    return [this.#getUsers];
  }

  #getUsers() {
    return new Route({
      async handler(req, res, next) {
        try {
          const users = await this.#service.findUsers();
          return res.json(users);
        } catch (err) {
          next(err);
        }
      },
    });
  }
}
