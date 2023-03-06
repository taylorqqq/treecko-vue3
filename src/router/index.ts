import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layout/admin.vue"),
      children: [
        {
          path: "admin",
          component: () => import("../views/home.vue"),
        },
      ],
    },
  ],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
