<template>
  <div>
    <h-transition tag="ul" :duration="0.5" :delay="0.1">
      <li
        v-for="(item, index) in list"
        :key="item.id"
        :data-index="index"
        class="item"
      >
        {{ item.content }}
      </li>
    </h-transition>
  </div>
</template>

<script lang="ts" setup>
import { getArticle } from "@/api/article";

const list = ref<any>([]);

getArticle().then((res) => {
  list.value = res.data;
});
</script>

<style lang="scss" scoped>
.item {
  @apply bg-blue-600 m-2 p-2 rounded-md text-white;
}
</style>
