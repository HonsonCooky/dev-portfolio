<script setup>
import { useRouter } from 'vue-router'
import InlineSvg from 'vue-inline-svg'

const emit = defineEmits(['clicked'])
const router = useRouter()

function goHome() {
  router.push('/')
  emit('clicked')
}
</script>

<template>
  <button title="Logo" type="button" @click="goHome">
    <inline-svg src="/imgs/favicon.svg" />
    <span>C:\Harrison&gt;</span>
  </button>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1ch;
  overflow: hidden;

  span {
    display: flex;
    text-overflow: ellipsis;
  }

  svg {
    height: var(--line-height);
  }
}
</style>
