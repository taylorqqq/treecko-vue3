<template>
  <div>
    <tui-editor
      v-model="content"
      :height="500"
      placeholder="请输入markdown语法"
      @update:modelValue="updateContent"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const content = ref("Hello, Toast UI1!");

const updateContent = (value: string) => {
  content.value = value;
};
</script>

<style lang="scss" scoped></style>
