<template>
  <div class="w-screen h-screen bg-red-400 flex justify-center items-center">
    <RouterLink
      :to="{ name: 'dashboard' }"
      class="login-button w-28 text-center mr-5"
      >后台管理</RouterLink
    >

    <RouterLink
      :to="{ name: 'login' }"
      class="login-button w-28 text-center next"
      v-if="isNotLogin"
      >用户登录</RouterLink
    >
  </div>
</template>

<script lang="ts" setup>
import { CacheEnum } from "@/enum/cacheEnum";
import { local } from "@/utils";

const isNotLogin = computed(() => {
  return local.get(CacheEnum.TOKEN_KEY) ? true : false;
});
</script>
