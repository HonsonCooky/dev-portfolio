<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes().filter((route) => route.name)
</script>

<template>
  <button v-for="route in routes" :key="route.path" @click="router.push(route.path)">\{{ route.name }}</button>
</template>

<style scoped>
button {
  text-align: start;
}
</style>
