<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style scoped>
main {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
