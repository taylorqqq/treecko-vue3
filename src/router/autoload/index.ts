import { RouteRecordRaw } from "vue-router";
import { envs } from "@/utils";
import autoloadViewRoutes from "./view";
import autoloadModuleRoutes from "./module";

const routes: RouteRecordRaw[] = envs.VITE_ROUTER_AUTOLOAD
  ? autoloadViewRoutes()
  : autoloadModuleRoutes();

//TODO: 通过权限控制路由
export default routes;
