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
const getInfo = () => getAction<InfoInterface>("/user/info");

export { userLogin, getInfo };
