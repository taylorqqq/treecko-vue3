import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/user/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        data: {
          token: Mock.Random.guid(),
          userInfo: {
            name: Mock.Random.cname(),
            age: Mock.Random.integer(18, 60),
          },
        },
      };
    },
  },
] as MockMethod[];
