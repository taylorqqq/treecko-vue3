import { Plugin } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
export function setupAutoImportPlugins(): Plugin[] {
  return [
    AutoImport({
      //定义element-plus api按需加载
      imports: ["vue", "vue-router"],
      //composables目录文件按需加载
      // dirs: ["src/composables"],
      dts: "types/auto-imports.d.ts",
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
    }),
    Components({
      resolvers: [
        //element-plus组件按需导入
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        //针对iconpark图标按需导入
        // (componentName) => {
        //   if (componentName.startsWith("Icon")) {
        //     return {
        //       name: componentName.slice(4),
        //       from: "@icon-park/vue-next",
        //     };
        //   }
        // },
      ],
      extensions: ["vue"],
      dirs: ["src/components"],
      //组件名称包含目录，防止同名组件冲突
      // directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: "types/components.d.ts",
    }),
  ];
}
