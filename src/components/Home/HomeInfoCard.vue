<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoCv = () => router.push('/cv')
const gotoProjects = () => router.push('/projects')
</script>

<template>
  <div class="intro-card">
    <h1>Kia ora!</h1>
    <h3>Engineering Excellence;<br />Now Taking Center Stage.</h3>

    <div class="button-group">
      <button @click="gotoCv">Resume</button>
      <button @click="gotoProjects">Projects</button>
    </div>

    <p>
      From stage lights to system calls, I thrive where creative performance meets technical precision. Professionally,
      I deliver maintainable, production-ready systems in <code>TypeScript</code> and <code>C#</code>. Personally, I'm
      driven to get closer to the hardware, honing my craft in <code>C</code>, <code>Zig</code>, and <code>Lua</code> to
      explore the systems-level engineering that powers high-performance software.
    </p>
  </div>
</template>

<style scoped>
.intro-card {
  display: flex;
  flex: 1 0 280px;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-weight: bolder;
    font-size: 5em;
    line-height: 1.2;
  }

  h3 {
    margin: 1em 0;
    font-weight: normal;
    font-size: 1.4em;
  }
}

.button-group {
  display: flex;
  flex-flow: row wrap;
  gap: 2ch;
  margin: 2em 0;

  > button {
    border: 1px solid var(--border);
    padding: 0.2em 2ch;
    font-size: 1.2em;
  }
}
</style>
