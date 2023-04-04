<template>
  <div class="bg-white p-4 flex justify-between items-center">
    <div class="flex justify-between items-center">
      <div @click="menuStore.toggleMenu()">
        <i
          class="fas mr-3 cursor-pointer"
          :class="menuStore.close ? 'fa-align-right' : 'fa-align-left'"
        ></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(route, index) in levelList"
          :key="index"
          :to="index === 0 ? undefined : { path: route.path }"
        >
          {{ route.meta.menu?.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="flex justify-between items-center">
      <i
        class="mr-2"
        @click="fullScreen"
        :class="isFullScreen ? 'fas fa-minimize' : 'fas fa-maximize'"
      ></i>
      <div
        class="relative flex justify-between items-center group cursor-pointer"
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
          class="absolute z-10 top-full right-0 group-hover:block bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";
import { useRouter, useRoute, RouteLocationMatched } from "vue-router";
import { useUserStore } from "@/store/userStore";
import { useMenuStore } from "@/store/menuStore";
const userStore = useUserStore();
const menuStore = useMenuStore();
const router = useRouter();
const route = useRoute();

const isFullScreen = ref(false);

const levelList = ref(<RouteLocationMatched[]>[]);

const getLevelList = () => {
  levelList.value = route.matched.filter((item) => item.name && item.meta.menu);
};

const fullScreen = () => {
  const docElm = document.documentElement;
  if (!isFullScreen.value) {
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
  }
  if (isFullScreen.value) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  isFullScreen.value = !isFullScreen.value;
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
