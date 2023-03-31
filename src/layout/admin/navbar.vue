<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(route, index) in levelList"
        :key="index"
        :to="index === 0 ? undefined : { path: route.path }"
      >
        {{ route.meta.menu?.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <div
      class="user flex justify-between items-center relative group cursor-pointer"
    >
      <!-- :src="userStore.userInfo.avatar" -->
      <img
        src="@/assets/images/avatar.jpeg"
        class="w-8 h-8 rounded-full object-cover"
      />
      <span class="ml-1 text-sm text-gray-600">{{
        userStore.userInfo.name
      }}</span>
      <section
        class="absolute top-full right-0 group-hover:block bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
      >
        <div class="flex items-center py-2">
          <a class="fas fa-file-lines"></a>
          <span class="text-xs text-gray-600 ml-2">文档资料</span>
        </div>
        <div class="flex items-center py-2">
          <a class="fas fa-user"></a>
          <span class="text-xs text-gray-600 ml-2">用户管理</span>
        </div>
        <div class="flex items-center border-t py-3" @click="handleLogOut">
          <a class="fas fa-sign-out-alt"></a>
          <span class="text-xs text-gray-600 ml-2">退出登录</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute, RouteLocationMatched } from "vue-router";
import { useUserStore } from "@/store/userStore";
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const levelList = ref(<RouteLocationMatched[]>[]);

const getLevelList = () => {
  levelList.value = route.matched.filter((item) => item.name);
};

onBeforeMount(() => {
  getLevelList();
});

router.afterEach(() => {
  getLevelList();
});

const handleLogOut = async () => {
  const code = await userStore.toLogOut();
  if (code == 200) router.push({ name: "home" });
};
</script>

<style lang="scss" scoped></style>
