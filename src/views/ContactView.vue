<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="page">
    <a href="mailto:contact@honsoncooky.dev"><Icon icon="mdi:email" /> contact@honsoncooky.dev</a>
    <a href="https://github.com/HonsonCooky" target="_blank"><Icon icon="mdi:github" /> GitHub/HonsonCooky</a>
    <a href="https://www.linkedin.com/in/HonsonCooky" target="_blank">
      <Icon icon="mdi:linkedin" />
      LinkedIn/HonsonCooky
    </a>
    <a href="https://www.reddit.com/user/HonsonCooky" target="_blank"><Icon icon="mdi:reddit" /> Reddit/HonsonCooky</a>
    <br />
    <a href="/docs/HarrisonCookCV(current).pdf" target="_blank"><Icon icon="mdi:file" /> Resume</a>
  </div>
</template>

<style scoped>
.page {
  flex-direction: column;
}

a {
  font-size: 1.6em;
}
</style>
