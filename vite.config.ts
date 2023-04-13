import { defineConfig, ConfigEnv, loadEnv } from "vite";
import alias from "./vite/alias";
import { parseEnv } from "./vite/util";
import { setupPlugins } from "./vite/plugins";
import path from "path";

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
    build: {
      target: "es2015",
      outDir: "dist",
      rollupOptions: {
        emptyOutDir: true, // 清空输出目录
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            // if (id.includes(path.resolve(__dirname, '/src/store/index.ts'))) {
            //   return 'vendor'
            // }
          },
        },
      },
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
