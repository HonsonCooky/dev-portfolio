<script setup>
function navigate(path) {
  console.log(`Navigating to ${path}`)
}
</script>

<template>
  <header>
    <hgroup>
      <h1>Harrison Cook</h1>
    </hgroup>
    <nav>
      <button @click="navigate('home')">Home</button>
      <button @click="navigate('about')">About</button>
      <button @click="navigate('experience')">Experience</button>
      <button @click="navigate('skills')">Skills</button>
      <button @click="navigate('projects')">Projects</button>
      <button @click="navigate('contact')">Contact</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1em;
}

hgroup h1 {
  font-size: 1.5rem;
  margin: 0;
}

button {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5em 2ch;
  height: 100%;
}
</style>
