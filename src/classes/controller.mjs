export class Controller {
  #prefix;

  constructor(prefix) {
    this.#prefix = prefix;
  }

  get prefix() {
    return this.#prefix;
  }
}
