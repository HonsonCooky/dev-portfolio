<template>
  <div class="page">
    <HomeProfileCard />
    <HomeInfoCard />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'
import HomeProfileCard from '../components/HomeProfileCard.vue'
import HomeInfoCard from '../components/HomeInfoCard.vue'

const router = useRouter()

function openResume() {
  window.open('/docs/HarrisonCookCV(current).pdf', '_blank')
}
</script>

<style lang="css" scoped>
.page {
  gap: 3em 4ch;
}
</style>
