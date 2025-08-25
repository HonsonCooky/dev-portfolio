<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const openResume = () => window.open('/docs/HarrisonCookCV(current).pdf', '_blank')
const gotoProjects = () => router.push('/projects')
</script>

<template>
  <div class="intro-card">
    <h1>Kia ora!</h1>
    <h3>Engineering Excellence;<br />Now Taking Center Stage.</h3>

    <div class="button-group">
      <button @click="openResume">Resume</button>
      <button @click="gotoProjects">Projects</button>
    </div>

    <p>
      From stage lights to server logs, I've thrived where structure meets creativity. In my professional work, I've
      delivered maintainable, production-ready systems in <code>TypeScript</code> and <code>C#</code>, often navigating
      tightly defined specs and complex organizational workflows. Beyond the brief, I sharpen my craft in
      <code>C</code>, <code>Rust</code>, <code>Zig</code> and <code>Lua</code> - languages that let me explore
      systems-level thinking and performance-driven design, fuelling where I want to take my engineering next.
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
