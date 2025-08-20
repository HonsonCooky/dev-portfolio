<script setup>
import VHeader from './components/VHeader.vue'
</script>

<template>
  <div id="app">
    <VHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  padding: 0 18px;
}
</style>
