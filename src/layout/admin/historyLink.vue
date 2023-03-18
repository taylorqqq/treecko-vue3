<template>
  <div class="hidden md:block">
    <div class="m-5 grid grid-flow-col gap-2 justify-start">
      <a
        href="/"
        v-for="item in 6"
        class="bg-white rounded-md py-2 px-3 text-sm text-gray-600"
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
