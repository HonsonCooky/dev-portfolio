import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/scripts/styleImports'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import CurriculumVitae from './views/CurriculumVitae.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView },
  { path: '/cv', component: CurriculumVitae },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const root = document.documentElement
const mq = window.matchMedia('(prefers-color-scheme: light)')
const applyTheme = (e) => {
  if (e.matches) {
    root.setAttribute('data-theme', 'light')
  } else {
    root.removeAttribute('data-theme')
  }
}
applyTheme(mq)
mq.addEventListener('change', applyTheme)

createApp(App).use(router).mount('#app')
