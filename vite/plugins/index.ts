import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { setupMockPlugins } from "./mock";
export function setupPlugins(isBuild: boolean, env: Record<string, any>) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugins(isBuild));

  return plugins;
}
