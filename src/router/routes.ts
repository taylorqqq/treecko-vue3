import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: {
      requiresAuth: false,
      guest: false,
    },
  },
] as RouteRecordRaw[];

export default routes;
