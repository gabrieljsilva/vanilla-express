import { getRepositoryInstance } from "../../infra/database/index.mjs";
import { UserRepository } from "../../infra/database/repositories/index.mjs";
import { HttpException } from "../../exceptions/index.mjs";
import { Jwt } from "../../infra/jsonwebtokens/index.mjs";

export class AuthService {
  #userRepository = getRepositoryInstance(UserRepository);
  #jwt = new Jwt();

  async login(email, password) {
    const user = await this.#userRepository.findByEmail(email);

    if (!user) {
      throw new HttpException("user not found", 404);
    }

    const passwordMatches = user.password === password;

    if (!passwordMatches) {
      throw new HttpException("email and password not match", 403);
    }

    return this.#jwt.emit({ id: user.id });
  }
}
