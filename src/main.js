import { createApp } from "vue";
import "./assets/styles/html5-reset.css";
import "./assets/styles/googlesanscode.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "./views/Home.vue";

const routes = [{ path: "/", component: HomeView }];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
