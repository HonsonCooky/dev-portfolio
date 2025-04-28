<script setup>
import { Icon } from '@iconify/vue'
import { toggleTheme } from '@/theme.js'
</script>

<template>
  <button title="Toggle Theme" type="button" @click="toggleTheme">
    <icon :inline="true" icon="mdi:theme-light-dark" />
  </button>
</template>

<style scoped>
button {
  aspect-ratio: 1/1;
  font-size: 1.2rem;
}
</style>
