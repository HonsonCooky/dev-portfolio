<template>
  <DesktopHeader v-if="isWide" />
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import DesktopHeader from './components/DesktopHeader.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const width = ref(window.innerWidth)

const isWide = computed(() => width.value > 786)

function handleResize() {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
