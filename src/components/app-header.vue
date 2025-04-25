<script setup>
import { useDevice } from '@/composables/use-device.js'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const { isMobile } = useDevice()
const router = useRouter()
const routes = computed(() => router.getRoutes().filter((route) => route.name))
</script>

<template>
  <header>
    <!-- MOBILE VIEW -->
    <template v-if="isMobile">
      <nav class="mobile-nav">
        <button
          v-for="route in routes"
          :key="route.name"
          @click="router.push({ name: route.name })"
        >
          {{ route.name }}
        </button>
      </nav>
    </template>

    <!-- DESKTOP VIEW-->
    <template v-else>
      <nav class="desktop-nav">
        <button
          v-for="route in routes"
          :key="route.name"
          @click="router.push({ name: route.name })"
        >
          {{ route.name }}
        </button>
      </nav>
    </template>
  </header>
</template>

<style scoped>
.mobile-nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.mobile-nav button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
}

.desktop-nav {
  display: flex;
  padding: 2rem;
  justify-content: center;
}

.desktop-nav button {
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
}
</style>
