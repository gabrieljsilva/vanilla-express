import jwt from "jsonwebtoken";

export class Jwt {
  #privateKey = process.env.JWT_PRIVATE_KEY;

  emit(payload, options) {
    return jwt.sign(payload, this.#privateKey, options);
  }

  verify(token, options) {
    return jwt.verify(token, this.#privateKey, options);
  }
}
