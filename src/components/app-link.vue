<template>
  <a v-bind="$attrs" class="app-link">
    <slot></slot>
  </a>
</template>

<style scoped>
.app-link {
  display: inline-flex;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 2ch;
  border-radius: 0.5em;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
