import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { App } from "vue";
import routes from "./routes";
import autoloadRoutes from "./autoload";
import guard from "./guard";
import { useUserStore } from "@/store/userStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});
export async function setupRouter(app: App) {
  await useUserStore().getUserInfo();
  autoloadRoutes(router);
  guard(router);
  app.use(router);
}

export default router;

// import {
//   createRouter,
//   createWebHistory,
//   createWebHashHistory,
// } from "vue-router";
// import { App } from "vue";
// import routes from "./routes";
// import layoutRoutes from "./autoload";
// import guard from "./guard";

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [...routes, ...layoutRoutes],
// });
// export function setupRouter(app: App) {
//   guard(router);
//   app.use(router);
// }

// export default router;
