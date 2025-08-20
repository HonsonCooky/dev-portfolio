import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/styles/GoogleSansCodeFont.css'
import './assets/styles/HtmlReset.css'
import HomeView from './views/HomeView.vue'

const routes = [{ path: '/', component: HomeView }]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
