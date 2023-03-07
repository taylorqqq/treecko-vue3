import { defineConfig, ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEev } from "./vite/util";
import { setupPlugins } from "./vite/plugins";

export default ({ command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()); // process.cwd() 表示当前工作目录
  const isBuild = command === "build"; // 判断是否是生产环境
  const { VITE_ADMIN_API } = parseEev(env);
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
    server: {
      port: 3000,
      open: true,
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
