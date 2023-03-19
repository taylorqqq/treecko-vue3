import { getAction, postAction } from "@/plugins/axios/request";

interface LoginInterface {
  token: string;
}
interface InfoInterface {
  name: string;
  age: number;
  avatar: string;
}
class UserApi {
  userLogin(data: any) {
    return postAction<LoginInterface>("/user/login", data);
  }

  getInfo(params: any) {
    return getAction<InfoInterface>("/user/info", params);
  }
}

export default new UserApi();
