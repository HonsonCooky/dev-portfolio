<script setup>
import { onMounted, onUnmounted } from 'vue'
import { education } from '../assets/scripts/education'
import { experiences } from '../assets/scripts/work'

// 1. Define your global styles as a string
const globalStyles = `
  main {
    overflow: auto;
  }

  @media print {
    body > *:not(#app),
    #app > *:not(main),
    main > *:not(.legal-page) {
      display: none;
    }

    @page {
      margin: none;
      size: a4 portrait;
    }
  }
`

let styleElement = null

onMounted(() => {
  // 2. On mount, create the <style> tag and add it to the <head>
  styleElement = document.createElement('style')
  styleElement.id = 'legal-page-styles' // Give it an ID for easy removal
  styleElement.innerHTML = globalStyles
  document.head.appendChild(styleElement)
})

onUnmounted(() => {
  // 3. On unmount, find our <style> tag and remove it
  if (styleElement) {
    document.head.removeChild(styleElement)
  }
})
</script>

<template>
  <div class="legal-page">
    <hgroup>
      <h1>Harrison Cook</h1>
      <h2>Software Engineer · Full-Stack Development · Cloud Architecture</h2>
    </hgroup>
    <hr />

    <section>
      <h1>Overview</h1>
      <p>
        A Software Engineer with 4+ years of professional experience delivering maintainable, production-ready systems
        in <code>TypeScript</code> and <code>C#</code> within complex, high-stakes environments. My background in
        musical theatre provides a unique foundation in creative problem-solving, collaboration, and clear
        communication. Transitioning from stage lights to system calls, I am now actively specializing in low-level and
        systems programming with <code>C</code>, <code>Zig</code>, and <code>Lua</code>, driven to build the elegant,
        high-performance engines that power games and advanced software.
      </p>
    </section>
    <hr />

    <section>
      <h1>Experience</h1>
      <div v-for="job in experiences.filter((_, i) => i < 3)" class="major">
        <div class="info">
          <span>
            {{ job.title }}
            <span>at {{ job.company }}</span>
          </span>
          <hr />
          <span class="date">{{ job.dates }}</span>
        </div>
        <div class="location">
          {{ job.location }}
        </div>
        <ul>
          <li class="desc" v-for="jp in job.points.filter((_, i) => i === 1)">
            {{ jp }}
          </li>
        </ul>
      </div>
    </section>
    <hr />

    <section>
      <h1>Education</h1>
      <div v-for="edu in education.filter((_, i) => i === 0)" class="major">
        <div class="info">
          <span>
            {{ edu.degree }}
          </span>
          <hr />
          <span class="date"> {{ edu.dates }}</span>
        </div>
        <div class="location">
          {{ edu.location }}
        </div>
        <ul>
          <li v-for="ea in edu.achievements.filter((_, i) => i === 0)">{{ ea }}</li>
        </ul>
      </div>
    </section>
    <hr />
  </div>
</template>

<style scoped>
.legal-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  border: 1px solid var(--border);
  padding: 18px;
  width: 210mm;
  height: 297mm;
  font-size: 10pt;

  * {
    font-family: sans-serif;
  }

  p,
  li {
    max-width: unset;
    text-align: unset;
  }

  code {
    margin: 0;
    padding: 0 0.5ch;
    color: var(--fg);
  }
}

hgroup {
  text-align: center;
}

hgroup > h1 {
  font-size: 20pt;
}

hgroup > h2 {
  font-weight: normal;
  font-size: 13pt;
}

hr {
  border: 1px solid var(--border);
  width: 100%;
}

section {
  width: 100%;
}

section > h1 {
  margin: 0.4em 0;
  font-weight: normal;
  font-size: 18pt;
}

.major {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.major > ul {
  margin-left: 2ch;
}

.major > .info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.2em;
}

.major > .info > span {
  font-weight: bolder;
  font-size: 12pt;
  white-space: nowrap;
  span {
    font-style: italic;
    font-weight: normal;
  }
}

.major > .info > hr {
  margin: 0 2ch;
  border-style: dashed;
}

.major > .info > .date {
  min-width: 20ch;
}

@media print {
  .legal-page {
    margin: 0;
    box-shadow: none;
    border: none;
  }
}
</style>
