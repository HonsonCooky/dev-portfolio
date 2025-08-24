<script setup lang="ts">
import HomeInfoCard from '../components/Home/HomeInfoCard.vue'
import HomeProfileCard from '../components/Home/HomeProfileCard.vue'
import Page from '../components/Page.vue'
</script>

<template>
  <Page :is-column="false">
    <HomeProfileCard />
    <HomeInfoCard />
  </Page>
</template>
