<script setup>
import { useRouter } from 'vue-router'
import InlineSvg from 'vue-inline-svg'

const router = useRouter()
</script>

<template>
  <button title="Logo" type="button" @click="router.push('/')">
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
}
</style>
