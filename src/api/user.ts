import { getAction, postAction } from "@/plugins/axios/request";
interface LoginInterface {
  token: string;
}

const userLogin = (params: any) =>
  postAction<LoginInterface>("/user/login", params);

interface InfoInterface {
  name: string;
  age: number;
  avatar: string;
}
const getInfo = (params: any) => getAction<InfoInterface>("/user/info", params);

export { userLogin, getInfo };
