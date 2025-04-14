import {createMemoryHistory, createRouter} from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ],
})
