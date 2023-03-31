import router from "@/router";
import { ref } from "vue";
class Menu {
  public menus = ref<IMenu[]>([]);
  public historyMenu = ref<IMenu[]>([]);

  constructor() {
    this.menus.value = this.getMenuyByRoutes();
  }

  getMenuyByRoutes() {
    return router
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
  }
}

export default new Menu();
