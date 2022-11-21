import { HttpException } from "../exceptions/index.mjs";

export function errorHandlerMiddleware(err, req, res, next) {
  console.error(err);
  if (err instanceof HttpException) {
    return res.status(err.status).json(err);
  }
  return res.status(500).json(new HttpException("internal server error", 500));
}
