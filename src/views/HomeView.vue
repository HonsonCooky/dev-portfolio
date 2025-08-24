<script setup lang="ts">
import HomeInfoCard from '../components/Home/HomeInfoCard.vue'
import HomeProfileCard from '../components/Home/HomeProfileCard.vue'
</script>

<template>
  <div class="page">
    <HomeProfileCard />
    <HomeInfoCard />
  </div>
</template>

<style lang="css" scoped>
.page {
  gap: 3em 4ch;
}
</style>
