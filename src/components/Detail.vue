<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <details>
    <summary>{{ title }}</summary>
    <div class="detail-content">
      <slot />
    </div>
  </details>
</template>

<style scoped>
details {
  width: 100%;
}

summary {
  padding: 0.3em;
  font-weight: bold;
  font-size: 1.4em;
}

summary:hover {
  background-color: var(--highlight);
}

summary:active {
  background-color: var(--selection);
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 3em;
  padding: 1ch;
}
</style>
