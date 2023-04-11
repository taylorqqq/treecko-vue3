import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { App } from "vue";
import routes from "./routes";
import autoloadRoutes from "./autoload";
import guard from "./guard";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});
export function setupRouter(app: App) {
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
