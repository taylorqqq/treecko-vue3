import { getAction, postAction } from "@/plugins/axios/request";

class UserApi {
  userLogin(data: any) {
    return postAction<LoginInterface>("/user/login", data);
  }

  userLogOut() {
    return postAction("/user/logOut");
  }

  getInfo() {
    return getAction<InfoInterface>("/user/info");
  }
}

export default new UserApi();
