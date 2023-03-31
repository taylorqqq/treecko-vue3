import { defineStore } from "pinia";
import router from "@/router";
import { RouteLocationNormalized } from "vue-router";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      menus: [] as IMenu[],
      historyMenu: [] as IMenu[],
      close: false,
    };
  },
  actions: {
    init() {
      this.getMenuyByRoutes();
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return;
      const menu: IMenu = { ...route.meta?.menu, route: route.name as string };
      const isHas = this.historyMenu.some((item) => item.route === route.name);
      if (!isHas) {
        this.historyMenu.push(menu);
      }
      if (this.historyMenu.length > 10) {
        this.historyMenu.shift();
      }
    },
    removeHistoryMenu(menu: IMenu) {
      if (this.historyMenu.length === 1) return;
      const index = this.historyMenu.findIndex(
        (item) => item.route === menu.route
      );
      this.historyMenu.splice(index, 1);

      if (menu.route === router.currentRoute.value.name) {
        if (index > 0) {
          router.push({ name: this.historyMenu[index - 1].route });
        } else {
          router.push({ name: this.historyMenu[0].route });
        }
      }
    },
    // 获取活跃菜单
    getActiveMenu() {
      const route = router.currentRoute.value;
      this.menus.forEach((menu) => {
        menu.isActive = false;
        let isChild = menu.children?.some(
          (child) => child.route === route.name
        );
        if (isChild) {
          menu.isActive = true;
        }
        menu.children?.forEach((child) => {
          child.isActive = false;
          if (child.route === route.name) {
            child.isActive = true;
          }
        });
      });
    },
    // 根据路由获取菜单
    getMenuyByRoutes() {
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
    // 菜单收缩
    toggleMenu() {
      this.close = !this.close;
    },
  },
  persist: true,
});
