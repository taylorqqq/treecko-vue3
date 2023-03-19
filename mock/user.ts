import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/user/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: {
          token: Mock.Random.guid(),
        },
      };
    },
  },
  {
    url: "/api/user/logOut",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "success",
      };
    },
  },
  {
    url: "/api/user/info",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: {
          name: Mock.Random.cname(),
          age: Mock.Random.integer(18, 60),
          avatar: Mock.Random.image(
            "100x100",
            "#50B347",
            "#FFF",
            "png",
            "avatar"
          ),
        },
      };
    },
  },
] as MockMethod[];
