import http from "@/plugins/axios";

// get请求
export const getAction = (url: string, params: any) => {
  return http.request({
    url: url,
    method: "get",
    params,
  });
};

// post请求
export const postAction = (url: string, data: any) => {
  return http.request({
    url: url,
    method: "post",
    data,
  });
};

// put请求
export const putAction = (url: string, data: any) => {
  return http.request({
    url: url,
    method: "put",
    data,
  });
};

// delete请求
export const deleteAction = (url: string, data: any) => {
  return http.request({
    url: url,
    method: "delete",
    data,
  });
};

// patch请求
export const patchAction = (url: string, data: any) => {
  return http.request({
    url: url,
    method: "patch",
    data,
  });
};

// uploadFile请求
export const uploadFileAction = (url: string, data: any) => {
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
export const downloadFileAction = (url: string, params: any) => {
  return http.request({
    url: url,
    method: "get",
    params,
    responseType: "blob",
  });
};

export default {
  getAction,
  postAction,
  putAction,
  deleteAction,
  patchAction,
  uploadFileAction,
  downloadFileAction,
};
