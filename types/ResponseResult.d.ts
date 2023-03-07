interface ResponseResult<T> {
  code: number;
  type: "success" | "error";
  message: string;
  data: T;
}
