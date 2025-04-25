<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import AppLink from '@/components/app-link.vue'
import { useDevice } from '@/composables/use-device.js'
import { toggleTheme } from '@/utils/theme-management.js'

const { isMobile } = useDevice()
const router = useRouter()
const routes = computed(() => router.getRoutes().filter((route) => route.name !== 'Home'))

function toggleMenu() {
  const nav = document.querySelector('.mobile-nav')
  if (nav) nav.classList.toggle('open')
}

function closeMenu() {
  const nav = document.querySelector('.mobile-nav')
  if (nav) nav.classList.remove('open')
}
</script>

<template>
  <header>
    <app-link class="menu-btn" :hidden="!isMobile" @click="toggleMenu">
      <icon icon="mdi:menu" />
    </app-link>

    <div class="brand">
      <app-link @click="router.push('/')">C:\HarrisonCook&gt;_</app-link>
    </div>

    <nav :class="isMobile ? 'mobile-nav' : 'desktop-nav'">
      <app-link
        v-for="route in routes"
        :key="route.name"
        @click="
          router.push({ name: route.name })
          closeMenu();
        "
      >
        {{ route.name }}
      </app-link>
    </nav>

    <app-link @click="toggleTheme()">
      <icon icon="mdi:contrast-circle" />
    </app-link>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  position: fixed;
  background-color: var(--base);
  border-bottom: 2px solid var(--crust);
  width: 100%;
  padding: 1em 2ch;
  z-index: 1;
}

.brand {
  display: flex;
  flex: 1;
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: -100%;
  transition: left 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: -1;
  background-color: var(--crust);
  width: 65%;
  height: 100vh;
  padding: 1em;

  &.open {
    left: 0;
  }
}

.desktop-nav {
  display: flex;
  flex-direction: row;
}
</style>
