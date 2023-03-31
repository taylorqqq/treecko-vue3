import { RouteRecordRaw } from "vue-router";

export default {
  name: "auth",
  path: "/auth",
  component: () => import("@/layout/auth.vue"),
  meta: {
    requiresAuth: false,
    guest: false,
  },
  children: [
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/auth/login.vue"),
      meta: {
        requiresAuth: false,
        guest: true,
      },
    },
  ],
} as RouteRecordRaw;
