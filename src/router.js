import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/about-view.vue'),
    },
    {
      path: '/work',
      name: 'Experience',
      component: () => import('./views/work-view.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('./views/portfolio-view.vue'),
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('./views/blogs-view.vue'),
    },
  ],
})

export default router
