<template>
  <router-view />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { env } from "@/utils/helper";
import userApi from "@/api/userApi";
import { getUserInfo } from "@/api/user";

onMounted(() => {
  // userApi.getUserInfo({}).then((res) => {
  //   console.log(res.data.data.name);
  // });
  // getUserInfo({}).then((res) => {
  //   console.log(res.data);
  // });
});
</script>
