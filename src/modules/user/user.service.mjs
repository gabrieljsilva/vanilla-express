import { getRepositoryInstance } from "../../infra/database/index.mjs";
import { UserRepository } from "../../infra/database/repositories/index.mjs";

export class UserService {
  #userRepository = getRepositoryInstance(UserRepository);

  async findUsers() {
    return this.#userRepository.findAll();
  }
}
