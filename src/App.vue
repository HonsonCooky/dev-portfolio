<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <nav-bar> </nav-bar>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
