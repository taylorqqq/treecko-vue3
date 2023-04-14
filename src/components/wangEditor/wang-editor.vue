<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
      @onChange="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

interface IProps {
  modelValue?: string;
  height?: number;
  placeholder?: string;
  uploadImageServer?: string;
  uploadVideoServer?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  height: 500,
  placeholder: "",
  uploadImageServer: "/api/upload/image",
  uploadVideoServer: "/api/upload/video",
});

const emit = defineEmits(["update:modelValue"]);

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

const mode = ref("markdown"); // wysiwyg | markdown

// 内容 HTML
const valueHtml = ref(props.modelValue);

const toolbarConfig = {};
const editorConfig = ref({
  placeholder: props.placeholder,
  // uploadImageServer: props.uploadImageServer,
  MENU_CONF: {
    uploadImage: {
      server: props.uploadImageServer,
    },
    uploadVideo: {
      server: props.uploadVideoServer,
    },
  },
});

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const handleChange = (editor: any) => {
  emit("update:modelValue", valueHtml.value);
};
</script>
