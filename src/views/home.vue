<template>
  <div class="w-screen h-screen bg-red-400 flex justify-center items-center">
    <RouterLink :to="{ name: 'admin' }" class="login-button w-28 text-center"
      >后台管理</RouterLink
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>
