<script setup></script>

<template>
  <div class="card">
    <slot />
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
</style>
