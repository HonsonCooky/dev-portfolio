<script setup>
defineProps(['title', 'footer'])
</script>

<template>
  <div class="card">
    <div v-if="title" class="title">
      <h3>{{ title }}</h3>
    </div>
    <slot />
    <div v-if="footer" class="footer">
      <p>{{ footer }}</p>
    </div>
  </div>
</template>

<style scoped></style>
