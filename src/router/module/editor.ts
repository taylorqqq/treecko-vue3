import { RouteRecordRaw } from "vue-router";

export default {
  name: "editor",
  path: "/editor",
  component: () => import("@/layout/editor.vue"),
  meta: {
    title: "编辑器",
    show: true,
    requiresAuth: true,
    guest: false,
    icon: "fab fa-blogger",
  },
  children: [
    {
      name: "markdown",
      path: "/markdown",
      component: () => import("@/views/editor/markdown.vue"),
      meta: {
        title: "Markdown",
        show: true,
        requiresAuth: true,
        guest: false,
        icon: "fab fa-blogger",
      },
    },
  ],
} as RouteRecordRaw;
