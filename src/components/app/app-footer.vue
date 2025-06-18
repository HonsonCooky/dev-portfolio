<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer id="footer">
    <p>&copy; 2025 Harrison Cook. All rights reserved.</p>
    <a href="mailto:contact@honsoncooky.dev" target="_blank">
      <Icon :inline="true" icon="mdi:email" />
      <span>contact@honsoncooky.dev</span>
    </a>
    <br />
    <a href="https://github.com/HonsonCooky" target="_blank">
      <Icon :inline="true" icon="mdi:github" />
      <span>GitHub</span>
    </a>
    <br />
    <a href="https://www.linkedin.com/in/HonsonCooky" target="_blank">
      <Icon :inline="true" icon="mdi:linkedin" />
      <span>LinkedIn</span>
    </a>
    <br />
    <a href="https://www.reddit.com/user/HonsonCooky" target="_blank">
      <Icon :inline="true" icon="mdi:reddit" />
      <span>Reddit</span>
    </a>
    <br />
    <a href="/docs/HarrisonCookCV(current).pdf" target="_blank">
      <Icon :inline="true" icon="mdi:download" />
      <span>Curriculum Vitae [PDF]</span>
    </a>
  </footer>
</template>
