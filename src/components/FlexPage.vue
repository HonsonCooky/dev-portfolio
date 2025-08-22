<template>
  <div class="page">
    <slot />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 18px;
  gap: 18px;
}
</style>
