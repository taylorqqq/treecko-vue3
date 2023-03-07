import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/get",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.integer(18, 60),
        },
      };
    },
  },
] as MockMethod[];
