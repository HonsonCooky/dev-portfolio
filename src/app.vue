<script setup lang="js">
import appHeader from './components/app/app-header.vue'
import appFooter from './components/app/app-footer.vue'
import aboutView from './views/about-view.vue'
import workView from './views/work-view.vue'
import portfolioView from './views/portfolio-view.vue'
import blogsView from './views/blogs-view.vue'
</script>

<template>
  <appHeader />
  <hr />
  <aboutView />
  <br />
  <workView />
  <br />
  <portfolioView />
  <br />
  <blogsView />
  <br />
  <hr />
  <appFooter />
</template>
