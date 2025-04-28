<script setup>
import { Icon } from '@iconify/vue'

defineProps(['mobileNavActive'])
const emit = defineEmits(['toggleNavMenu'])
</script>

<template>
  <button title="Navigation Menu" type="button" @click="emit('toggleNavMenu')">
    <Icon v-if="mobileNavActive" :inline="true" class="nav-icon close" icon="mdi:close" />
    <Icon v-else :inline="true" class="nav-icon menu" icon="mdi:menu" />
  </button>
</template>

<style scoped>
button {
  aspect-ratio: 1/1;
}
</style>
