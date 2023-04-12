import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/upload/image",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "success",
        data: {
          url: Mock.Random.image("100x100", "#50B347", "#FFF", "png", "木守"),
        },
      };
    },
  },
] as MockMethod[];
