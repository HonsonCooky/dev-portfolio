import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/styles/FlexDefaults.css'
import './assets/styles/GoogleSansCodeFont.css'
import './assets/styles/HtmlReset.css'
import './assets/styles/VSCodeTheme.css'
import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import EducationView from './views/EducationView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ToolbeltView from './views/ToolbeltView.vue'
import WorkHistoryView from './views/WorkHistoryView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/work', component: WorkHistoryView },
  { path: '/education', component: EducationView },
  { path: '/projects', component: ProjectsView },
  { path: '/toolbelt', component: ToolbeltView },
  { path: '/contact', component: ContactView },
]
const router = createRouter({
  history: createMemoryHistory(),
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
