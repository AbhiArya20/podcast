export class SuccessResponse {
  success: boolean;
  message?: string;
  code?: string;
  data?: any;

  constructor(response: { data?: any; message?: string; code?: string }) {
    this.success = true;
    this.data = response.data;
    this.code = response.code;
    this.message = response.message;
  }
}
