<template>
  <div class="hidden md:block px-5 py-2 bg-gray-50 border-t border-b shadow-md">
    <div class="grid grid-flow-col gap-2 justify-start">
      <a
        href="/"
        v-for="item in 6"
        class="bg-white rounded-md shadow-sm border py-2 px-3 text-sm text-gray-600 hover:bg-violet-500 hover:text-white"
      >
        {{ "编辑器" + item }}
        <i class="fas fa-times ml-1"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped></style>
