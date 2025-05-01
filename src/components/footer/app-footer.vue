<script setup>
import { Icon } from '@iconify/vue'
import Filler from '@/components/filler.vue'

function downloadCV() {
  window.open('/docs/HarrisonCookCV(current).pdf', '_blank')
}
</script>

<template>
  <footer>
    <span>HonsonCooky:</span>
    <wbr />
    <div>
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
      <button type="button" @click="downloadCV()">
        <Icon :inline="true" icon="mdi:download" />
      </button>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: var(--crust);
  box-shadow: 0 0 var(--shadow-blur) var(--subtext);
  padding: 0.5rem max(1ch, calc((100vw - 1920px) / 2)) 3rem;
}

div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

button {
  aspect-ratio: 1/1;
}

span {
  cursor: default;
  margin-right: 1ch;
}
</style>
