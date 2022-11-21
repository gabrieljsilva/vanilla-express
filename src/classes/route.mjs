import { httpMethods } from "../constants/index.mjs";

export class Route {
  method;
  path;
  handler;
  middlewares;
  isPublic;

  constructor({
    handler,
    method = httpMethods.GET,
    path = "",
    middlewares = [],
    isPublic = false,
  }) {
    this.method = method;
    this.path = path;
    this.handler = handler;
    this.middlewares = middlewares;
    this.isPublic = isPublic;
  }
}
