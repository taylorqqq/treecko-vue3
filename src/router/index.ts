import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routes";
import layoutRoutes from "./autoload";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes],
});
export function setupRouter(app: App) {
  app.use(router);
}

export default router;
