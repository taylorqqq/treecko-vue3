import { RouteRecordRaw } from "vue-router";

export default {
  name: "admin",
  path: "/admin",
  component: () => import("@/layout/admin.vue"),
  meta: {
    title: "管理后台",
    show: true,
    requiresAuth: true,
    guest: false,
    icon: "fab fa-blogger",
    isCheck: true,
  },
  children: [
    {
      name: "dashboard",
      path: "/dashboard",
      component: () => import("@/views/admin/dashboard.vue"),
      meta: {
        title: "首页",
        show: true,
        requiresAuth: true,
        guest: false,
        icon: "fab fa-blogger",
        isCheck: true,
      },
    },
  ],
} as RouteRecordRaw;
