import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/styles/GoogleSansCodeFont.css'
import './assets/styles/HtmlReset.css'
import './assets/styles/VSCodeTheme.css'
import ContactView from './views/ContactView.vue'
import EducationView from './views/EducationView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ToolbeltView from './views/ToolbeltView.vue'
import WorkHistoryView from './views/WorkHistoryView.vue'

const routes = [
  { path: '/', component: HomeView },
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

createApp(App).use(router).mount('#app')
