<template>
  <header>
    <div class="window-banner">
      <div>
        <Icon icon="vscode-icons:file-type-vscode" width="1.6em" height="1.6em" />
      </div>
      <div>harrison-cook-portfolio</div>
      <div class="window-controls">
        <Icon icon="mdi:window-minimize" />
        <Icon icon="mdi:window-maximize" />
        <Icon icon="mdi:window-close" />
      </div>
    </div>

    <nav>
      <button @click="navigate('/')">Home</button>
      <button @click="navigate('/work')">Work</button>
      <button @click="navigate('/education')">Education</button>
      <button @click="navigate('/projects')">Projects</button>
      <button @click="navigate('/toolbelt')">Toolbelt</button>
      <button @click="navigate('/contact')">Contact</button>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function navigate(path) {
  router.push(path)
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

.window-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
}

.window-controls > * {
  padding: 1em;
}

nav {
  display: flex;
  flex-direction: row;
  gap: 1px;
  background-color: var(--border);
}

nav > button {
  background-color: transparent;
  border: none;
  padding: 0.5em 2ch;
}
</style>
