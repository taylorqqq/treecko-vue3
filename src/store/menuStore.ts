import { defineStore } from "pinia";
import router from "@/router";

export const useRouterStore = defineStore("menu", {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
    };
  },
  actions: {
    init() {
      this.getMenyByRoutes();
    },
    // 根据路由获取菜单
    getMenyByRoutes() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.meta?.menu && route?.children?.length)
        .map((route) => {
          let menu: IMenu = { ...route.meta?.menu };
          menu.children = route.children
            ?.filter((child) => child.meta?.menu)
            .map((child) => {
              return { ...child.meta?.menu, route: child.name };
            }) as IMenu[];
          return menu;
        })
        .filter((route) => route?.children?.length);
    },
  },
  persist: true,
});
