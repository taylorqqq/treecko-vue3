import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";
export default [
  {
    url: "/api/upload/image",
    method: "post",
    response: () => {
      return {
        code: 200,
        errno: 0,
        message: "success",
        data: {
          url: Mock.Random.image("1000x600", "#50B347", "#FFF", "png", "木守"),
        },
      };
    },
  },
  {
    url: "/api/upload/video",
    method: "post",
    response: () => {
      return {
        code: 200,
        errno: 0,
        message: "success",
        data: {
          url: "./video.mp4",
          poster: Mock.Random.image(
            "200x300",
            "#50B347",
            "#FFF",
            "png",
            "木守"
          ),
        },
      };
    },
  },
] as MockMethod[];
