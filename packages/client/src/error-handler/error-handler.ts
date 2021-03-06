export class CustomError {
  message: string;
  constructor(message?: string) {
    this.message = message || 'Something went wrong... Please try again';
  }
}

export class HTTPError extends CustomError {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status || 500;
  }
}

export const errorHandler = (err: unknown) => {
  console.log(err);
};
