import { RouteRecordRaw } from "vue-router";

export default function autoloadModuleRoutes() {
  const modules: { [key: string]: any } = import.meta.globEager(
    "../module/**/*.ts"
  );

  const routes = [] as RouteRecordRaw[];

  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default);
  });

  return routes;
}
