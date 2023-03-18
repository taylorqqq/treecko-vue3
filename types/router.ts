import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
    guest?: boolean;
    show?: boolean;
    title?: string;
    icon?: string;
    isCheck?: boolean;
    permission?: string[];
  }
}
