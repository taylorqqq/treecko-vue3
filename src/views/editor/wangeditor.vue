<template>
  <div>
    <wang-editor
      v-model="content"
      :height="500"
      placeholder="请输入文本"
      @update:modelValue="updateContent"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const content = ref("Hello, WangEditor!");
const updateContent = (value: string) => {
  //html 转 text
  content.value = value;
};
</script>

<style lang="scss" scoped></style>
