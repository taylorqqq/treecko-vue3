import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useRouterStore = defineStore(
  "router",
  () => {
    const routes = getRoutes();

    return { routes };
  },
  {
    persist: true,
  }
);

const getRoutes = () => {
  const router = useRouter();
  const routes = router
    .getRoutes()
    .filter((route) => route?.children?.length && route.meta?.show)
    .map((route) => {
      route.children = route.children?.filter((child) => child.meta?.show);
      return route;
    });

  return routes;
};
