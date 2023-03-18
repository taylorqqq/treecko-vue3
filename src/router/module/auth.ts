import { RouteRecordRaw } from "vue-router";

export default {
  name: "auth",
  path: "/auth",
  component: () => import("@/layout/auth.vue"),
  meta: {
    title: "操作页面",
    show: true,
    requiresAuth: false,
    guest: false,
    icon: "fab fa-blogger",
  },
  children: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/auth/login.vue"),
      meta: {
        title: "登录",
        show: true,
        requiresAuth: false,
        guest: false,
        icon: "fab fa-blogger",
      },
    },
  ],
} as RouteRecordRaw;
