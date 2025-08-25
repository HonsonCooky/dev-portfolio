<template>
  <div class="content-item">
    <slot />
  </div>
</template>

<style>
.content-item {
  margin: 1.2em 0;

  h2 {
    margin: 0 0 0.6em 0;
    font-weight: normal;
    font-size: 1.4em;
  }

  h2 > small {
    font-size: 0.8em;
  }

  p {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
  }

  p > span {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 1ch;
  }

  ul {
    margin-left: 2ch;
  }
}
</style>
