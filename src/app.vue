<script setup>
import appHeader from './components/app-header.vue'
import appFooter from './components/app-footer.vue'
import homeView from './views/home-view.vue'
import aboutView from './views/about-view.vue'
import experiencesView from './views/experiences-view.vue'
import portfolioView from './views/portfolio-view.vue'
import blogsView from './views/blogs-view.vue'
</script>

<template>
  <app-header />
  <main>
    <home-view />
    <about-view />
    <experiences-view />
    <portfolio-view />
    <blogs-view />
  </main>
  <app-footer />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-height) + var(--shadow-blur));
}
</style>
