export class CustomError extends Error {
  constructor(message?: string) {
    super();

    this.message = message || 'Something went wrong... Please try again';
  }
}
