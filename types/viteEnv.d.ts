interface ImportMetaEnv {
  VITE_ADMIN_API: string;
  VITE_ADMIN_STATUS: boolean;
  VITE_ADMIN_NUMBER: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
