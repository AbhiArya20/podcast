class CustomError extends Error {
  description: string;
  code: number;
  constructor(error: { message: string; description: string; code: number }) {
    super(error.message);
    this.message = error.message;
    this.description = error.description;
    this.code = error.code;
  }
}

export default CustomError;
