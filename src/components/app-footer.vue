<script setup>
import { Icon } from '@iconify/vue'

function openLink(url) {
  window.open(url, '_blank')
}
</script>

<template>
  <footer>
    <span><b>contact</b>@<b>honsoncooky.dev</b></span>
    <wbr />
    <div>
      <button title="GitHub" type="button" @click="openLink('https://github.com/HonsonCooky')">
        <Icon :inline="true" icon="mdi:github" />
      </button>
      <button title="LinkedIn" type="button" @click="openLink('https://www.linkedin.com/in/HonsonCooky')">
        <Icon :inline="true" icon="mdi:linkedin" />
      </button>
      <button title="Reddit" type="button" @click="openLink('https://www.reddit.com/user/HonsonCooky')">
        <Icon :inline="true" icon="mdi:reddit" />
      </button>
      <button type="button" @click="openLink('/docs/HarrisonCookCV(current).pdf')">
        <Icon :inline="true" icon="mdi:download" />
      </button>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  row-gap: 1rem;
  flex-flow: row wrap;
  align-items: baseline;
  box-shadow: 0 0 var(--shadow-blur) var(--subtext);
  background-color: var(--crust);
  padding: 0.5rem max(1ch, calc((100vw - 1280px) / 2)) 3rem;
  width: 100%;
}

div {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

button {
  aspect-ratio: 1/1;

  svg {
    font-size: 1.2em;
  }
}

span {
  display: flex;
  margin-right: 1ch;
}
</style>
