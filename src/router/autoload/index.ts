import { RouteRecordRaw, Router } from "vue-router";
import { envs } from "@/utils";
import { useUserStore } from "@/store/userStore";
import autoloadViewRoutes from "./view";
import autoloadModuleRoutes from "./module";

let routes: RouteRecordRaw[] = envs.VITE_ROUTER_AUTOLOAD
  ? autoloadViewRoutes()
  : autoloadModuleRoutes();

const autoloadRoutes = (router: Router) => {
  const permissions = useUserStore().userInfo.permissions;

  routes = routes.map((route) => {
    route.children = route.children?.filter((child) => {
      const permission = child.meta?.permission as string;
      return permission ? permissions?.includes(permission) : true;
    });
    return route;
  });

  routes.forEach((route) => {
    router.addRoute(route);
  });
};

//TODO: 通过权限控制路由
export default autoloadRoutes;
