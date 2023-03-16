import { RouteLocationNormalized, Router } from "vue-router";
import { store } from "@/utils";
import { IData } from "@/utils/store";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach((to, from) => {
      // 登录验证
      let token = store.get("token")?.token;
      if (this.isLogin(to, token) === false) return { name: "login" };

      if (this.isGuest(to, token) === false) return { name: "home" };
    });
  }

  private isGuest(route: RouteLocationNormalized, token?: IData | null) {
    return Boolean(!route.meta.guest || (route.meta.guest && !token));
  }

  private isLogin(route: RouteLocationNormalized, token?: IData | null) {
    return Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && token)
    );
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
