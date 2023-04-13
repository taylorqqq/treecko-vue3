<template>
  <div id="wangeditor"></div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import WangEditor from "./wangEditor";

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
  uploadImageServer?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
  uploadImageServer: "/api/upload/image",
});
const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const editor = new WangEditor(
    "#wangeditor",
    (newHtml: string) => {
      emit("update:modelValue", newHtml);
    },
    props
  );
});
</script>

<style lang="scss"></style>
