<template>
  <div class="w-screen h-screen bg-red-400 flex justify-center items-center">
    <RouterLink
      :to="{ name: 'order' }"
      class="login-button w-28 text-center mr-5"
      >后台管理</RouterLink
    >

    <RouterLink
      :to="{ name: 'login' }"
      class="login-button w-28 text-center next"
      >用户登录</RouterLink
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>
