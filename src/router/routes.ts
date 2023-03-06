import { RouteRecordRaw } from "vue-router";
const routes = [
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
] as RouteRecordRaw[];

export default routes;
