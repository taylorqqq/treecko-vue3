import { RouteRecordRaw } from "vue-router";
import { envs } from "@/utils";

const layouts = import.meta.globEager("@/layout/*.vue");
const views = import.meta.globEager("@/views/**/*.vue");

function autoloadViewRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([path, module]: any) => {
    const route = getRouteByModule(path, module);
    route.meta = { requiresAuth: false, guest: false };
    if (route.name !== "auth") {
      route.meta.requiresAuth = true;
    }
    route.meta.guest = false;
    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const modulePath = file.match(/\/([^/]+)\.vue$/)?.[1] as string;

  const route = {
    path: `/${modulePath}`,
    name: modulePath,
    component: module.default,
  } as RouteRecordRaw;

  return Object.assign(route, module.default?.route); // 接收到组件内的route配置
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([path, module]: any) => {
    if (path.includes(`/views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(path, module);
      routes.push(route);
    }
  });

  return routes;
}

export default autoloadViewRoutes;
