interface ImportMetaEnv {
  VITE_ADMIN_API: string;
  VITE_API_URL: string;
  VITE_ROUTER_AUTOLOAD: boolean;
  VITE_MOCK_ENABLED: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
