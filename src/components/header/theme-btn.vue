<script setup>
import { Icon } from '@iconify/vue'
import { toggleTheme } from '@/assets/theme.js'
</script>

<template>
  <button title="Toggle Theme" type="button" @click="toggleTheme">
    <icon :inline="true" icon="mdi:theme-light-dark" />
  </button>
</template>

<style scoped>
button {
  aspect-ratio: 1/1;
}
</style>
