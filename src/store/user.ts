import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userApi from "@/api/UserApi";
import { local } from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";

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
            local.set(CacheEnum.TOKEN_KEY, {
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
            // local.remove(CacheEnum.TOKEN_KEY);
            localStorage.clear();
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
