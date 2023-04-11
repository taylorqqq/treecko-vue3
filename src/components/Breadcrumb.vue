<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(route, index) in levelList"
      :key="index"
      :to="index === 0 ? undefined : { path: route.path }"
    >
      {{ route.meta.menu?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { RouteLocationMatched, useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const levelList = ref(<RouteLocationMatched[]>[]);

const getLevelList = () => {
  levelList.value = route.matched.filter((item) => item.name && item.meta.menu);
};

onBeforeMount(() => {
  getLevelList();
});

router.afterEach(() => {
  getLevelList();
});
</script>

<style lang="scss" scoped></style>
