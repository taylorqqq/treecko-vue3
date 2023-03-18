import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: {
      title: "主页",
      show: true,
      requiresAuth: true,
      guest: false,
      icon: "fab fa-blogger",
    },
  },
] as RouteRecordRaw[];

export default routes;
