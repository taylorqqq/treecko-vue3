import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { App } from "vue";
import routes from "./routes";
import layoutRoutes from "./autoload";
import guard from "./guard";
import { useRouterStore } from "@/store/router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...layoutRoutes],
});
export function setupRouter(app: App) {
  guard(router);
  app.use(router);
}

export default router;
