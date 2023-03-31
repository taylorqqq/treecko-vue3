<template>
  <div class="admin flex min-h-screen">
    <MenuComponet />
    <div class="content flex-1 bg-gray-100">
      <NavBar />
      <HistoryLink />
      <div class="m-5">
        <router-view #default="{ Component }">
          <!-- <Transition
            enter-active-class="animate__animated animate__bounceOutRight"
          > -->
          <component :is="Component"></component>
          <!-- </Transition> -->
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import MenuComponet from "./admin/menu.vue";
import NavBar from "./admin/navbar.vue";
import HistoryLink from "./admin/historyLink.vue";
</script>
