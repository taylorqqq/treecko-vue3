import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router, { setupRouter } from "@/router";
import { setupPlugins } from "@/plugins";

async function bootStrap() {
  const app = createApp(App);
  setupPlugins(app);
  setupRouter(app);
  await router.isReady(); //等待路由准备就绪 再挂载
  app.mount("#app");
}

bootStrap();
