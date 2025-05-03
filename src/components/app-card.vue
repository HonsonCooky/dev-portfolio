<script setup></script>

<template>
  <div class="card">
    <div class="content">
      <slot />
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

.content {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  gap: 1em 1ch;
}
</style>
