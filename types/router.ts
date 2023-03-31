import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
    guest?: boolean;
    permission?: string[];
    menu?: IMenu;
  }
}
