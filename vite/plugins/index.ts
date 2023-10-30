import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
// import { visualizer } from "rollup-plugin-visualizer";
import { setupMockPlugins } from "./mock";
import { setupAutoImportPlugins } from "./autoimport";

import viteCompression from "vite-plugin-compression";
import vueSetupExtend from "vite-plugin-vue-setup-extend";

export function setupPlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins: Plugin[] = [
    vue(),
    // visualizer({
    //   emitFile: true, //是否被触摸
    //   filename: "stats.html", //生成分析网页文件名
    //   open: true, //在默认用户代理中打开生成的文件
    //   gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
    //   brotliSize: true, //从源代码中收集 brotli 大小并将其显示在图表中
    // }),
    ...setupAutoImportPlugins(),
    vueSetupExtend(),
    viteCompression({
      ext: ".gz",
      algorithm: "gzip",
      deleteOriginFile: false,
    }),
  ];
  plugins.push(setupMockPlugins(isBuild));

  return plugins;
}
