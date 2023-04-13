import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import setupElementPlus from "./elementui";
import setupPinia from "./pinia";
import _ from "lodash";

export function setupPlugins(app: App) {
  // autoRegisterComponents(app);
  setupTailwindcss();
  setupElementPlus(app);
  setupPinia(app);
}

/**
 *全局注册组件
 * @param {App} app
 */
function autoRegisterComponents(app: App) {
  const files = import.meta.globEager("../components/**/*.vue") as any;
  for (const path in files) {
    // const component = files[path].default;
    // app.component(component.name, component);

    const name = path.split("/")?.pop()?.split(".").shift() as string;
    const component = files[path].default;
    const componentName = _.upperFirst(_.camelCase(name));
    app.component(componentName, component);
  }
}
