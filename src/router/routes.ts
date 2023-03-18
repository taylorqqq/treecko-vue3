import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: {
      title: "主页",
      show: true,
      requiresAuth: false,
      guest: false,
      icon: "fab fa-blogger",
    },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/auth/login.vue"),
    meta: {
      title: "登录",
      show: true,
      requiresAuth: false,
      guest: true,
      icon: "fab fa-blogger",
    },
  },
] as RouteRecordRaw[];

export default routes;
