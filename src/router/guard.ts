import { RouteLocationNormalized, Router } from "vue-router";
import { store } from "@/utils";
import { IData } from "@/utils/store";
import { useUserStore } from "@/store/user";

class Guard {
  constructor(private router: Router) {}
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    if (this.isLogin(to) === false) return { name: "login" };
    // if (this.isGuest(to, token) === false) return { name: "home" };
    if (this.isGuest(to) === false) return from;

    this.getUserInfo();
  }

  private getToken(): string | null {
    return store.get("token")?.token;
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
    return Boolean(
      !route.meta.requiresAuth || (route.meta.requiresAuth && this.getToken())
    );
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
