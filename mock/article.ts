import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/article",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "success",
        "data|10-20": [
          {
            "id|+1": 1,
            title: "@ctitle(10, 20)",
            content: "@cparagraph(1, 3)",
          },
        ],
      };
    },
  },
] as MockMethod[];
