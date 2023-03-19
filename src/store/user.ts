import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userApi from "@/api/UserApi";
import { store } from "@/utils";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({} as InfoInterface);

    const getUserInfo = async () => {
      const { data } = await userApi.getInfo();
      userInfo.value = data;
    };

    const toLogin = (params: any) => {
      return new Promise((resolve, reject) => {
        userApi
          .userLogin(params)
          .then((res) => {
            const { token } = res.data;
            store.set("token", {
              token,
              expire: new Date().getTime() + 1000 * 60 * 60 * 24,
            });
            resolve(res.code);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };

    const toLogOut = () => {
      return new Promise((resolve, reject) => {
        userApi
          .userLogOut()
          .then((res) => {
            store.remove("token");
            resolve(res.code);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };

    return { userInfo, getUserInfo, toLogin, toLogOut };
  },
  {
    persist: true,
  }
);
