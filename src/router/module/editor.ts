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
      // icon: "fas fa-pen-nib",
      icon: "Edit",
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
          // icon: "fab fa-blogger",
          icon: "Markdown",
          title: "Markdown",
          isActive: false,
        },
        permission: "editor",
      },
    },
    {
      name: "wangeditor",
      path: "/wangeditor",
      component: () => import("@/views/editor/wangeditor.vue"),
      meta: {
        requiresAuth: true,
        guest: false,
        menu: {
          // icon: "fab fa-blogger",
          icon: "WangEditor",
          title: "WangEditor",
          isActive: false,
        },
        permission: "wangeditor",
      },
    },
  ],
} as unknown as RouteRecordRaw;
