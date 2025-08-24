<template>
  <div class="page">
    <a href="mailto:contact@honsoncooky.dev" target="_blank"><Icon icon="mdi:email" /> contact@honsoncooky.dev</a>
    <a href="https://github.com/HonsonCooky" target="_blank"><Icon icon="mdi:github" /> GitHub/HonsonCooky</a>
    <a href="https://www.linkedin.com/in/HonsonCooky" target="_blank"
      ><Icon icon="mdi:linkedin" /> LinkedIn/HonsonCooky</a
    >
    <a href="https://www.reddit.com/user/HonsonCooky" target="_blank"><Icon icon="mdi:reddit" /> Reddit/HonsonCooky</a>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.page {
  flex-direction: column;
}

a {
  font-size: 1.6em;
}
</style>
