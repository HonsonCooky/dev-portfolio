<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/header/app-header.vue'
import AppFooter from '@/components/footer/app-footer.vue'
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - var(--nav-height) + var(--shadow-blur));
}
</style>
