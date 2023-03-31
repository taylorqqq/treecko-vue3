import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  component: () => import("@/layout/admin.vue"),
  meta: {
    requiresAuth: false,
    guest: false,
    menu: {
      icon: "fas fa-bug",
      title: "错误页面",
      isActive: false,
    },
  },
  children: [
    {
      name: "403",
      path: "/403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        requiresAuth: false,
        guest: false,
        menu: {
          icon: "fab fa-blogger",
          title: "403",
          isActive: false,
        },
      },
    },
    {
      name: "404",
      path: "/404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        requiresAuth: false,
        guest: false,
        menu: {
          icon: "fab fa-blogger",
          title: "404",
          isActive: false,
        },
      },
    },
    {
      name: "500",
      path: "/500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        requiresAuth: false,
        guest: false,
        menu: {
          icon: "fab fa-blogger",
          title: "500",
          isActive: false,
        },
      },
    },
  ],
} as RouteRecordRaw;
