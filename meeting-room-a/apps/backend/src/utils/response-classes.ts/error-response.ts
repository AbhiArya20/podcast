import Constants from "../constants.js";
import { ZodError } from "zod";
class ErrorResponse {
  success: boolean;
  code?: string;
  message?: string;
  error?: any;
  constructor(response: { error?: any; code?: string; message?: string }) {
    this.success = false;
    this.error = response.error;
    this.code = response.code;
    this.message = response.message;
  }
}

export default ErrorResponse;

export const createValidationErrorResponse = (error: ZodError) => {
  return new ErrorResponse({
    error: error,
    code: Constants.VALIDATION_ERROR,
    message: error.errors[0]?.message,
  });
};

export const createAccountStatusErrorResponse = (status: string) => {
  return new ErrorResponse({
    code:
      status == "Blocked" ?
        Constants.ACCOUNT_BLOCKED
      : Constants.ACCOUNT_DELETED,
    message:
      status == "Blocked" ?
        Constants.ACCOUNT_BLOCKED_MESSAGE
      : Constants.ACCOUNT_DELETED_MESSAGE,
  });
};

export const createInvalidRefreshTokenErrorResponse = () => {
  return new ErrorResponse({
    code: Constants.INVALID_TOKEN,
    message: Constants.INVALID_REFRESH_TOKEN_MESSAGE,
  });
};

export const createServerErrorResponse = () => {
  return new ErrorResponse({
    code: Constants.SERVER_ERROR,
    message: Constants.SERVER_ERROR_MESSAGE,
  });
};
