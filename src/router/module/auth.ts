import { RouteRecordRaw } from "vue-router";

export default {
  name: "auth",
  path: "/auth",
  component: () => import("@/layout/auth.vue"),
  meta: {
    requiresAuth: false,
    guest: false,
    menu: {
      icon: "fab fa-blogger",
      title: "操作页面",
      isActive: false,
    },
  },
  children: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/auth/login.vue"),
      meta: {
        requiresAuth: false,
        guest: true,
        menu: {
          icon: "fab fa-blogger",
          title: "登录",
          isActive: false,
        },
      },
    },
  ],
} as RouteRecordRaw;
