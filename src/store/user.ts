import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getInfo } from "@/api/user";

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});

    const getUserInfo = async (params: any) => {
      const { data } = await getInfo(params);
      userInfo.value = data;
    };

    return { userInfo, getUserInfo };
  },
  {
    persist: true,
  }
);
