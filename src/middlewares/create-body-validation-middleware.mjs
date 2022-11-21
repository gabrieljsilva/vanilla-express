import { HttpException } from "../exceptions/index.mjs";

export function createBodyValidationMiddleware(schema) {
  return (req, res, next) => {
    try {
      schema.validateSync(req.body);
      next();
    } catch (error) {
      throw new HttpException(error.errors, 400);
    }
  };
}
