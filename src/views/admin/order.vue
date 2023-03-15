<template>
  <div>order</div>
</template>

<!-- <script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
onMounted(() => {
  route.meta.requiresAuth = true;
});
</script> -->

<script lang="ts">
export default {
  name: "order",
  route: {
    meta: {
      requiresAuth: true,
    },
  },
};
</script>
