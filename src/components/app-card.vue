<script setup>
defineProps(['title', 'footer'])
</script>

<template>
  <div class="card">
    <div v-if="title" class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <slot />
    </div>
    <div v-if="footer" class="footer">
      <p>{{ footer }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--darkblue);
  border-bottom: 1em solid var(--darkblue);
  padding: 1em 2ch;
}

.title {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1em 1ch;
  border-bottom: 1px solid var(--darkblue);
  margin-bottom: 1em;

  h3 {
    font-size: 1.5em;
  }
}

.content {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1em 1ch;
}
</style>
