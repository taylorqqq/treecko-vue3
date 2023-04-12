import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userApi from "@/api/userApi";
import { local } from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";

export const useUserStore = defineStore(
  "user",

  {
    state: () => {
      return {
        userInfo: {} as InfoInterface,
      };
    },
    actions: {
      async getUserInfo() {
        const { data } = await userApi.getInfo();
        this.userInfo = data;
      },

      toLogin(params: any) {
        return new Promise((resolve, reject) => {
          userApi
            .userLogin(params)
            .then((res) => {
              const { token } = res.data;
              local.set(
                CacheEnum.TOKEN_KEY,
                token,
                new Date().getTime() + 1000 * 60 * 60 * 24
              );
              resolve(res.code);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },

      toLogOut() {
        return new Promise((resolve, reject) => {
          userApi
            .userLogOut()
            .then((res) => {
              // local.remove(CacheEnum.TOKEN_KEY);
              localStorage.clear();
              this.userInfo = {} as InfoInterface;
              resolve(res.code);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
    },
    persist: true,
  }
);
