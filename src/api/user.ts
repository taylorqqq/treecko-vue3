import { getAction, postAction } from "@/plugins/axios/request";
interface LoginInterface {
  token: string;
}

const userLogin = (params: any) =>
  postAction<LoginInterface>("/user/login", params);

export { userLogin };
