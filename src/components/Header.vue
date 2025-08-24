<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isNavOpen = ref(false)
const router = useRouter()

function goto(path) {
  isNavOpen.value = false
  router.push(path)
}
</script>

<template>
  <header>
    <button @click="goto('/')" class="icon">
      <h1>Harrison Cook</h1>
    </button>

    <button @click="isNavOpen = !isNavOpen" class="menu">
      <Icon :icon="isNavOpen ? 'mdi:close' : 'mdi:menu'" />
    </button>

    <nav :class="{ open: isNavOpen }">
      <button @click="goto('/about')">About</button>
      <button @click="goto('/projects')">Projects</button>
      <button @click="goto('/contact')">Contact</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  z-index: 1000;
  border-bottom: 1px solid var(--border);
  background-color: var(--bg);
  padding: 0 calc((100vw - 1440px) / 2);
}

button {
  z-index: 2000;
  font-size: 2em;
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
  padding: 0 calc((100vw - 1440px) / 2);
  width: 100vw;
  height: 100vh;

  &.open {
    display: flex;
  }
}
</style>
