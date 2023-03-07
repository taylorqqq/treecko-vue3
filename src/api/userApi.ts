import { getAction } from "@/plugins/axios/request";

// 类
class UserApi {
  getUserInfo(data: any) {
    return getAction("/get", data);
  }
}

export default new UserApi();
