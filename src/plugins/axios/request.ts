import http from "@/plugins/axios";

// get请求
export const getAction = <T>(
  url: string,
  params: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "get",
    params,
  });
};

// post请求
export const postAction = <T>(
  url: string,
  data: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "post",
    data,
  });
};

// put请求
export const putAction = <T>(
  url: string,
  data: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "put",
    data,
  });
};

// delete请求
export const deleteAction = <T>(
  url: string,
  data: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "delete",
    data,
  });
};

// patch请求
export const patchAction = <T>(
  url: string,
  data: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "patch",
    data,
  });
};

// uploadFile请求
export const uploadFileAction = <T>(
  url: string,
  data: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "post",
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// downloadFile请求
export const downloadFileAction = <T>(
  url: string,
  params: any
): Promise<ResponseResult<T>> => {
  return http.request({
    url: url,
    method: "get",
    params,
    responseType: "blob",
  });
};
