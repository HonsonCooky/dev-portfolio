<!--
HEADER - A fixed position banner at the top of the page, offering navigation elements.

- Mobile: Nav Elements in sidebar menu, opened with button.
- Desktop: Nav Elements inline.
-->

<script setup>
import NavMenuBtn from '@/components/header/mobile/nav-menu-btn.vue'
import { ref } from 'vue'
import Brand from '@/components/header/brand.vue'
import { useDevice } from '@/composables/use-device.js'
import ThemeBtn from '@/components/header/theme-btn.vue'
import Filler from '@/components/filler.vue'
import ContentShield from '@/components/header/mobile/content-shield.vue'
import NavMenu from '@/components/header/mobile/nav-menu.vue'

// MOBILE ELEMENTS
const { isMobile, onDeviceSwitch } = useDevice()
const mobileNavActive = ref(false)

function toggleNavMenu() {
  mobileNavActive.value = !mobileNavActive.value
}

function closeNavMenu() {
  mobileNavActive.value = false
}

onDeviceSwitch(closeNavMenu)
</script>

<template>
  <!-- MOBILE -->
  <template v-if="isMobile">
    <header>
      <nav-menu-btn :mobile-nav-active="mobileNavActive" @toggle-nav-menu="toggleNavMenu" />
      <brand />
      <filler />
      <theme-btn />
    </header>
    <content-shield :hidden="!mobileNavActive" @shield-clicked="closeNavMenu" />
    <nav-menu :hidden="!mobileNavActive" @nav-clicked="closeNavMenu" />
  </template>

  <template v-else>
    <header>
      <brand />
    </header>
  </template>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 5dvh;
  z-index: 100;

  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: var(--crust);
  box-shadow: 0 0 10px var(--subtext);
}
</style>
