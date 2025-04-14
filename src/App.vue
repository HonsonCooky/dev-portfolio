<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <v-app full-height>
    <nav-bar/>
    <v-main scrollable>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
* {
  font-family: "JetBrains Mono", monospace;
}

.v-main {
  padding: 2rem;
}
</style>
