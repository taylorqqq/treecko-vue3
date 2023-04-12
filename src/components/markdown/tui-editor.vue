<template>
  <div id="editor"></div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import ToastEditor from "./toastEditor";

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
});

const emit = defineEmits(["update:modelValue"]);

nextTick(() => {
  const editor = new ToastEditor(
    "#editor",
    props.modelValue,
    `${props.height}px`
  );

  editor.toastEditor.on("change", (type: string) => {
    // if (type === "markdown") {
    //   emit("update:modelValue", editor.toastEditor.getMarkdown());
    // } else {
    //   emit("update:modelValue", editor.toastEditor.getHTML());
    // }
    // 简写
    emit(
      "update:modelValue",
      editor.toastEditor[type === "markdown" ? "getMarkdown" : "getHTML"]()
    );
  });
});
</script>

<style lang="scss">
#editor {
  @apply bg-white;

  .toastui-editor-mode-switch {
    // @apply no-visibility;
    display: none !important;
  }
}
</style>
