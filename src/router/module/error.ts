import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  component: () => import("@/layout/error.vue"),
  meta: {
    title: "错误页面",
    show: true,
    requiresAuth: false,
    guest: false,
    icon: "fab fa-blogger",
  },
  children: [
    {
      name: "403",
      path: "/403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        title: "403",
        show: true,
        requiresAuth: false,
        guest: false,
        icon: "fab fa-blogger",
      },
    },
    {
      name: "404",
      path: "/404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        title: "404",
        show: true,
        requiresAuth: false,
        guest: false,
        icon: "fab fa-blogger",
      },
    },
    {
      name: "500",
      path: "/500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        title: "500",
        show: true,
        requiresAuth: false,
        guest: false,
        icon: "fab fa-blogger",
      },
    },
  ],
} as RouteRecordRaw;
