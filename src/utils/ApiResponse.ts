export class ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;

  constructor(message: string, data: T, statusCode: number) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
    this.success = true;
  }
}
