import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.globEager("../layout/*.vue");

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([path, module]) => {
    const route = getRouteByModule(path, module);
    layoutRoutes.push(route);
  });

  return layoutRoutes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const path = file.match(/\.\/(.*)\.vue$/)?.[1] as string;
  const name = path.split("/")[1];

  const route = {
    path: `/${name}`,
    name,
    component: module.default,
  } as RouteRecordRaw;

  return route;
}

export default getRoutes();
