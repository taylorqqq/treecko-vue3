import { RouteRecordRaw } from "vue-router";

export default {
  name: "editor",
  path: "/editor",
  redirect: "/markdown",
  component: () => import("@/layout/admin.vue"),
  meta: {
    requiresAuth: true,
    guest: false,
    menu: {
      icon: "fas fa-pen-nib",
      title: "编辑器",
      isActive: false,
    },
  },
  children: [
    {
      name: "markdown",
      path: "/markdown",
      component: () => import("@/views/editor/markdown.vue"),
      meta: {
        requiresAuth: true,
        guest: false,
        menu: {
          icon: "fab fa-blogger",
          title: "Markdown",
          isActive: false,
        },
      },
    },
  ],
} as RouteRecordRaw;
