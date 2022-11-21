import { Controller, Route } from "../../classes/index.mjs";
import { httpMethods } from "../../constants/index.mjs";
import { AuthService } from "./auth.service.mjs";
import { createBodyValidationMiddleware } from "../../middlewares/index.mjs";
import { loginValidationSchema } from "./domain/index.mjs";

export class AuthController extends Controller {
  #authService = new AuthService();

  constructor() {
    super("/auth");
  }

  get routes() {
    return [this.#login()];
  }

  #login() {
    return new Route({
      path: "/login",
      method: httpMethods.POST,
      isPublic: true,
      middlewares: [createBodyValidationMiddleware(loginValidationSchema)],
      handler: async (request, response, next) => {
        try {
          const { email, password } = request.body;
          const token = await this.#authService.login(email, password);

          return response.json({ token });
        } catch (error) {
          next(error);
        }
      },
    });
  }
}
