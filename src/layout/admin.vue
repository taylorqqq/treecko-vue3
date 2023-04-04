<template>
  <div class="admin w-screen h-screen grid grid-cols-[auto_1fr]">
    <MenuComponet />
    <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
      <div>
        <NavBar />
        <HistoryLink />
      </div>
      <div class="m-3 relative overflow-y-auto">
        <router-view #default="{ Component, route }">
          <Transition
            class="animate__animated"
            :enter-active-class="
              route.meta.enterClass ?? 'animate__fadeInRight'
            "
            :leave-active-class="
              route.meta.leaveClass ?? 'animate__fadeOutLeft'
            "
          >
            <component :is="Component" class="absolute w-full"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuComponet from "./admin/menu.vue";
import NavBar from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
import { useMenuStore } from "@/store/menuStore";
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();

watch(
  route,
  () => {
    useMenuStore().init();
    useMenuStore().addHistoryMenu(route);
    useMenuStore().getActiveMenu();
  },
  { immediate: true }
);
</script>
