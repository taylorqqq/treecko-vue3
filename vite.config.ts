import { defineConfig, ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";
import { setupPlugins } from "./vite/plugins";

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === "build"; // 判断是否是生产环境
  const root = process.cwd(); // 表示当前工作目录
  const env = parseEnv(loadEnv(mode, root));
  const { VITE_ADMIN_API } = env;
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
    server: {
      open: true,
      port: 3001,
      proxy: {
        VITE_ADMIN_API: {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },
  };
};

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   },
// });
