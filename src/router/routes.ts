import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
] as RouteRecordRaw[];

export default routes;
