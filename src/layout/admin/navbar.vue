<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="user flex justify-between items-center relative group cursor-pointer"
    >
      <img
        src="@/assets/images/avatar.jpeg"
        class="w-8 h-8 rounded-full object-cover"
      />
      <span class="ml-1 text-sm text-gray-600">木守</span>
      <section
        class="absolute top-full right-0 group-hover:block bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
      >
        <div class="flex items-center py-2">
          <a class="fas fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">网站首页</span>
        </div>
        <div class="flex items-center py-2">
          <a class="fas fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">网站首页</span>
        </div>
        <div class="flex items-center border-t py-3" @click="handleLogOut">
          <a class="fas fa-ad"></a>
          <span class="text-xs text-gray-600 ml-2">退出登录</span>
          <!-- useUserStore -->
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
const router = useRouter();

const handleLogOut = async () => {
  const code = await useUserStore().toLogOut();
  if (code == 200) router.push({ name: "home" });
};
</script>

<style lang="scss" scoped></style>
