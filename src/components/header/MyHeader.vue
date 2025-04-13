<script setup>
import MyNavButton from "@/components/header/MyNavButton.vue";
</script>

<template>
  <header>
    <img src="/imgs/favicon.png"/>

    <nav>
      <MyNavButton to="/">home</MyNavButton>
      <MyNavButton to="/about">about</MyNavButton>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  background-color: var(--sky);

  img {
    border-radius: 50%;
    height: 10em;
  }

  nav {
    display: flex;
    flex-direction: column;
    row-gap: .1em;
  }
}

@media screen and (min-width: 768px) {
  header {
    flex-direction: column;
    padding: 1em;
  }
}
</style>