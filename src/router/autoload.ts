import { RouteRecordRaw } from "vue-router";
import { env } from "@/utils/helper";

const layouts = import.meta.globEager("../layout/*.vue");
const views = import.meta.globEager("../views/**/*.vue");

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([path, module]) => {
    const route = getRouteByModule(path, module);
    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const modulePath = file.match(/\.\/(.*)\.vue$/)?.[1] as string;
  // // 找出第一个/的位置
  const firstIndex = modulePath.indexOf("/");
  // // 截取最后一个/后面的字符串
  const path = modulePath.substring(firstIndex + 1);
  // 找出最后一个/的位置
  const lastIndex = modulePath.lastIndexOf("/");
  // 截取最后一个/后面的字符串
  const name = modulePath.substring(lastIndex + 1);

  const route = {
    path: `/${path}`,
    name,
    component: module.default,
  } as RouteRecordRaw;

  //   return route;
  return Object.assign(route, module.default?.route); // 接收到组件内的route配置
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([path, module]) => {
    if (path.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(path, module);
      routes.push(route);
    }
  });

  return routes;
}
// console.log(import.meta.env.VITE_ROUTER_AUTOLOAD);
const { VITE_ROUTER_AUTOLOAD } = env;
const routes = VITE_ROUTER_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[]);
export default routes;
