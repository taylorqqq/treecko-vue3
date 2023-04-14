import { RouteRecordRaw } from "vue-router";

export default {
  name: "admin",
  path: "/admin",
  redirect: "/dashboard",
  component: () => import("@/layout/admin.vue"),
  meta: {
    requiresAuth: true,
    guest: false,
    // menu: {
    //   icon: "fab fa-blogger",
    //   title: "管理后台",
    //   isActive: false,
    // },
  },
  children: [
    {
      name: "dashboard",
      path: "/dashboard",
      component: () => import("@/views/admin/dashboard.vue"),
      meta: {
        requiresAuth: true,
        guest: false,
        menu: {
          // icon: "fab fa-blogger",
          icon: "DashboardOne",
          title: "首页",
          isActive: false,
        },
        permission: "admin",
      },
    },
  ],
} as RouteRecordRaw;
