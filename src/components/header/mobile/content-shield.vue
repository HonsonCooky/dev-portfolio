<script setup>
const emit = defineEmits(['shieldClicked'])
</script>

<template>
  <div @click="emit('shieldClicked')"></div>
</template>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  backdrop-filter: blur(4px);
}
</style>
