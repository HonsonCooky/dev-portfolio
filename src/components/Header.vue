<template>
  <header>
    <button @click="navigateTo('/')" class="icon">
      <img src="../assets/imgs/favicon.svg" />
      <h1>Harrison Cook</h1>
    </button>

    <button @click="isNavOpen = !isNavOpen" class="menu">
      <Icon :icon="isNavOpen ? 'mdi:close' : 'mdi:menu'" />
    </button>

    <nav :class="{ open: isNavOpen }">
      <button @click="navigateTo('/about')">About</button>
      <hr />
      <button @click="navigateTo('/about')">Resume</button>
      <hr />
      <button @click="navigateTo('/about')">Projects</button>
      <hr />
      <button @click="navigateTo('/about')">Contact</button>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isNavOpen = ref(false)
const router = useRouter()

function navigateTo(path) {
  isNavOpen.value = false
  router.push(path)
}
</script>

<style scoped>
header {
  display: flex;
  position: relative;
  justify-content: space-between;
  box-shadow: 0 0 10px var(--shadow);
  padding: 0 calc((100vw - 1440px) / 2);
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  border: none;
  background-color: transparent;
  padding: 1ch;
  color: var(--text);
  font-size: 1.4em;
}

button:hover {
  background-color: var(--highlight);
}

button:active {
  background-color: var(--selection);
}

button.icon {
  gap: 1ch;
  height: auto;
}

nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
  background-color: var(--bg);
  padding: calc((100vw - 1080px) / 2);
  width: 100vw;
  height: 100vh;

  &.open {
    display: flex;
  }
}

nav > hr {
  border: 1px solid var(--border);
}
</style>
