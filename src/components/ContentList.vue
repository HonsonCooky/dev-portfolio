<template>
  <slot />
</template>

<style>
ul {
  margin-left: 2ch;
}

.content-item {
  > h2 {
    margin: 1em 0;
    font-size: 1.4em;
  }

  h2 > small {
    font-size: 0.8em;
  }

  > p {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  p > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1ch;
  }
}
</style>
