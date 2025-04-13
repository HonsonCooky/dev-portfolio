<script setup>
import {RouterView} from 'vue-router'
import MyHeader from "@/components/header/MyHeader.vue";
</script>

<template>
  <MyHeader/>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

main {
  flex: 1;
}

</style>
