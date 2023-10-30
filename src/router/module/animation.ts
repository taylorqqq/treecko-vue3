import { RouteRecordRaw } from "vue-router";

export default {
  name: "animation",
  path: "/animation",
  redirect: "/transition",
  component: () => import("@/layout/admin.vue"),
  meta: {
    requiresAuth: true,
    guest: false,
    menu: {
      // icon: "fas fa-pen-nib",
      icon: "ApplicationEffect",
      title: "工具库",
      isActive: false,
    },
  },
  children: [
    {
      name: "transition",
      path: "/transition",
      component: () => import("@/views/animation/transition.vue"),
      meta: {
        requiresAuth: true,
        guest: false,
        menu: {
          // icon: "fab fa-blogger",
          icon: "Transition",
          title: "过渡动画",
          isActive: false,
        },
        permission: "editor",
      },
    },
  ],
} as unknown as RouteRecordRaw;
