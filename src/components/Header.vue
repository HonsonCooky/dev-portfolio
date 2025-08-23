<template>
  <header>
    <button @click="navigateTo('/')" class="icon">
      <h1>Harrison Cook</h1>
    </button>

    <button @click="isNavOpen = !isNavOpen" class="menu">
      <Icon :icon="isNavOpen ? 'mdi:close' : 'mdi:menu'" />
    </button>

    <nav :class="{ open: isNavOpen }">
      <button @click="navigateTo('/about')">About</button>
      <button @click="navigateTo('/resume')">Resume</button>
      <button @click="navigateTo('/projects')">Projects</button>
      <button @click="navigateTo('/contact')">Contact</button>
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
  z-index: 1000;
  margin-bottom: 1em;
  box-shadow: 0 1ch 5px var(--shadow);
  background-color: var(--bg);
  padding: 0 calc((100vw - 1440px) / 2);
}

button {
  z-index: 2000;
  font-size: 1.4em;
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
  gap: 0.3em;
  z-index: 1000;
  background-color: var(--bg);
  padding: calc((100vw - 1080px) / 2);
  width: 100vw;
  height: 100vh;

  &.open {
    display: flex;
  }
}
</style>
