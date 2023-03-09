interface ImportMetaEnv {
  VITE_ADMIN_API: string;
  VITE_ROUTER_AUTOLOAD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
