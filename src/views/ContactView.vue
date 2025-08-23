<template>
  <div class="page">
    <a href="mailto:contact@honsoncooky.dev"><Icon icon="mdi:email" /> contact@honsoncooky.dev</a>
    <a href="https://github.com/HonsonCooky"><Icon icon="mdi:github" /> GitHub/HonsonCooky</a>
    <a href="https://www.linkedin.com/in/HonsonCooky"><Icon icon="mdi:linkedin" /> LinkedIn/HonsonCooky</a>
    <a href="https://www.reddit.com/user/HonsonCooky"><Icon icon="mdi:reddit" /> Reddit/HonsonCooky</a>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1ch;
  padding: 0.3em;
  color: var(--fg);
  font-size: 1.4em;
  text-decoration: none;
}

a:hover {
  background-color: var(--highlight);
}
</style>
