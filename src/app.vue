<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/app-header.vue'
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  min-height: 100dvh;
  width: 100%;
}
</style>
