<template>
  <a v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<style scoped>
a {
  display: inline-flex;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5em 2ch;
  border-radius: 0.5em;

  &:hover {
    background-color: var(--surface0);
    color: var(--lavender);
    transform: translateY(-2px);
  }

  &:active {
    background-color: var(--mantle);
    transform: translateY(0);
  }

}
</style>
