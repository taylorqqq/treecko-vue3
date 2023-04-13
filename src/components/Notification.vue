<template>
  <div class="notification">
    <i class="fas fa-bell" @click.stop="showTab = !showTab"></i>

    <el-tabs v-model="activeName" class="tab" v-show="showTab" @click.stop
      ><el-tab-pane
        v-for="item in panes"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <a href="">{{ item.content }}</a>
        <a href="">{{ item.content }}</a>
        <a href="">{{ item.content }}</a>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
const showTab = ref(false);
const activeName = ref("site");
const panes = ref([
  {
    key: "site",
    label: "站内通知",
    content:
      "站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容站内通知内容",
  },
  {
    key: "message",
    label: "系统通知",
    content: "系统通知内容",
  },
]);

onMounted(() => {
  nextTick(() => {
    document.documentElement.addEventListener("click", () => {
      showTab.value = false;
    });
  });
});

onBeforeUnmount(() => {
  document.documentElement.removeEventListener("click", () => {
    showTab.value = false;
  });
});
</script>

<style lang="scss" scoped>
.notification {
  @apply relative;
  .tab {
    @apply absolute w-[300px] bg-white py-2 px-5 border rounded-md shadow-sm right-[-30px] z-10 text-xs;

    a {
      @apply block truncate overflow-hidden border-b pb-2 my-2 hover:text-blue-500;
    }
  }
}
</style>
