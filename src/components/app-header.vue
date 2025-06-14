<script setup lang="js">
let buttons = document.querySelector('header').querySelectorAll('button')
console.log(buttons)
</script>

<template>
  <header>
    <button>Home</button>
    <button>About</button>
    <button>Experiences</button>
    <button>Portfolio</button>
    <button>Blogs</button>
  </header>
</template>

<style lang="css">
header {
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  height: var(--nav-height);
  z-index: 1000;

  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: var(--crust);
  box-shadow: 0 0 var(--shadow-blur) var(--subtext);
  padding: 0 max(0px, calc((100vw - 1280px) / 2));
}
</style>
