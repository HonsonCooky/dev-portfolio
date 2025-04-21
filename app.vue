<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `Harrison Cook | ${pageTitle}` : 'Harrison Cook'
  }
})
</script>

<template>
  <div>
    <nuxt-route-announcer />
    <app-header/>
    <nuxt-page/>
    <app-footer />
  </div>
</template>