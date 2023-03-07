// import { getAction } from "@/plugins/axios/request";

// interface User {
//   name: string;
// }

// const getUserInfo = (params: any) => getAction("/get", params);

// export { getUserInfo };

import http from "@/plugins/axios";

interface User {
  name: string;
  age: number;
}

const getUserInfo = (params: any) => {
  return http.request<User>({
    url: "/get",
    method: "get",
    params,
  });
};

export { getUserInfo };
