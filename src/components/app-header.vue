<script setup lang="js">
function hashNavigation(hash) {
  window.location.hash = hash
}
</script>

<template>
  <header>
    <button type="button" title="Home" @click="hashNavigation('')">Home</button>
    <button type="button" title="About" @click="hashNavigation('about')">About</button>
    <button type="button" title="Experiences" @click="hashNavigation('experiences')">Experiences</button>
    <button type="button" title="Portfolio" @click="hashNavigation('portfolio')">Portfolio</button>
    <button type="button" title="Blogs" @click="hashNavigation('blogs')">Blogs</button>
  </header>
</template>

<style lang="css" scoped>
header {
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: var(--crust);
  box-shadow: 0 0 var(--shadow-blur) var(--subtext);
  padding: 0.1em max(0px, calc((100vw - 1280px) / 2));
}

button {
  padding: 0.2em 2ch;
}
</style>
