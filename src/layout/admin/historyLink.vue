<template>
  <div class="hidden md:block px-3 py-2 bg-gray-50 border-t border-b shadow-md">
    <div class="grid grid-flow-col gap-2 justify-start">
      <span
        v-for="(menu, index) in historyMenu"
        :key="index"
        class="bg-white rounded-md shadow-sm border py-2 px-3 text-sm text-gray-600 cursor-pointer hover:bg-violet-500 hover:text-white"
        :class="{ '!bg-violet-500 text-white': $route.name === menu.route }"
      >
        <router-link :to="{ name: menu.route }">
          {{ menu.title }}
        </router-link>
        <i
          class="fas fa-times ml-3"
          @click.self="useMenuStore().removeHistoryMenu(menu)"
        ></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useMenuStore } from "@/store/menuStore";
const { historyMenu } = useMenuStore();
</script>

<style lang="scss" scoped></style>
