<template>
  <div class="page">
    <HomeProfileCard />
    <HomeInfoCard />
  </div>
</template>

<script setup lang="ts">
import HomeProfileCard from '../components/Home/HomeProfileCard.vue'
import HomeInfoCard from '../components/Home/HomeInfoCard.vue'
</script>

<style lang="css" scoped>
.page {
  gap: 3em 4ch;
}
</style>
