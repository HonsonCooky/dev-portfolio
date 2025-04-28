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

<style scoped>
.card {
  border: 1px solid var(--darkblue);
  border-bottom: 5px solid var(--darkblue);
  border-top: none;
}
</style>
