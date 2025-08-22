<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex: 0 0 280px;
  flex-direction: column;
  background-color: var(--line-highlight);
  padding: 18px;
  height: clamp(100px, 30em, 400px);
  border-radius: 18px;
}
</style>
