import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router, { setupRouter } from "./router";

async function bootStrap() {
  const app = createApp(App);
  setupRouter(app);
  await router.isReady(); //等待路由准备就绪 再挂载
  app.mount("#app");
}

bootStrap();
