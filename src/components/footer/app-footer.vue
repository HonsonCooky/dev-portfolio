<script setup>
import { Icon } from '@iconify/vue'
import Filler from '@/components/filler.vue'
</script>

<template>
  <footer>
    <span>HonsonCooky>_</span>
    <button title="GitHub" type="button" @click="window.open('https://github.com/HonsonCooky', '_blank')">
      <Icon :inline="true" icon="mdi:github" />
    </button>
    <button title="LinkedIn" type="button" @click="window.open('https://www.linkedin.com/in/HonsonCooky', '_blank')">
      <Icon :inline="true" icon="mdi:linkedin" />
    </button>
    <button
      title="Stack Overflow"
      type="button"
      @click="window.open('https://stackoverflow.com/users/HonsonCooky', '_blank')"
    >
      <Icon :inline="true" icon="mdi:stack-overflow" />
    </button>
    <button title="Reddit" type="button" @click="window.open('https://www.reddit.com/user/HonsonCooky', '_blank')">
      <Icon :inline="true" icon="mdi:reddit" />
    </button>
    <filler />
    <button type="button" @click="window.location.href = '/assets/cv.pdf'">
      <Icon :inline="true" icon="mdi:download" />
    </button>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 0.5rem 1ch;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  background-color: var(--crust);
  box-shadow: 0 0 10px var(--subtext);
}

span {
  cursor: default;
}

svg {
  font-size: var(--line-height);
}
</style>
