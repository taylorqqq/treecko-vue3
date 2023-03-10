// import { getAction } from "@/plugins/axios/request";

// interface User {
//   name: string;
// }

// const getUserInfo = (params: any) => getAction("/get", params);

// export { getUserInfo };

import http from "@/plugins/axios";

interface userinterface {
  name: string;
  age: number;
}

const getUserInfo = (params: any) => {
  return http.request<userinterface>({
    url: "/user/info",
    method: "get",
    params,
  });
};

interface loginInterface {
  token: string;
}

const userLogin = (params: any) => {
  return http.request<loginInterface>({
    url: "/user/login",
    method: "post",
    params,
  });
};

export { getUserInfo, userLogin };
