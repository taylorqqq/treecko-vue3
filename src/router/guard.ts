import { RouteLocationNormalized, Router } from "vue-router";
import { local } from "@/utils";
import { IData } from "@/utils/local";
import { useUserStore } from "@/store/user";
import { CacheEnum } from "@/enum/cacheEnum";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    if (this.isLogin(to) === false) return { name: "login" };
    // if (this.isGuest(to) === false) return { name: "home" };
    if (this.isGuest(to) === false) return from;

    await this.getUserInfo();
  }

  private getToken(): string | null {
    return local.get(CacheEnum.TOKEN_KEY);
  }

  private getUserInfo = () => {
    if (!this.getToken()) {
      useUserStore().getUserInfo();
    }
  };

  private isGuest(route: RouteLocationNormalized) {
    return Boolean(!route.meta.guest || (route.meta.guest && !this.getToken()));
  }

  private isLogin(route: RouteLocationNormalized) {
    const state = Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && this.getToken())
    );
    if (state == false) {
      local.set(CacheEnum.REDIRECT_ROUTE_KEY, route.name);
    }

    return state;
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
