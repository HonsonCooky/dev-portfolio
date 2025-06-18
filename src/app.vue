<script setup lang="js">
import AppHeader from './components/app/app-header.vue'
import AppFooter from './components/app/app-footer.vue'
import AboutView from './views/about-view.vue'
import WorkView from './views/work-view.vue'
import PortfolioView from './views/portfolio-view.vue'
import BlogsView from './views/blogs-view.vue'
</script>

<template>
  <AppHeader />
  <hr />
  <AboutView />
  <br />
  <br />
  <WorkView />
  <br />
  <br />
  <PortfolioView />
  <br />
  <br />
  <BlogsView />
  <br />
  <br />
  <hr />
  <AppFooter />
</template>
