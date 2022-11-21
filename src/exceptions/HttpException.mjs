export class HttpException {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }
}
