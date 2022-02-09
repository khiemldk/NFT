export interface ISuccessResponse {
  meta: {
    code: number;
    message: string;
  };
  data: any;
}

export interface IError {
  meta: {
    code: number;
    message: string;
  };
}
