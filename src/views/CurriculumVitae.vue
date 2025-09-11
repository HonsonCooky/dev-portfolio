<script setup>
import { Icon } from '@iconify/vue'
import { onMounted, onUnmounted } from 'vue'
import { education } from '../assets/scripts/education'
import { toolbelt } from '../assets/scripts/toolbelt'
import { experiences, workYearsRounded } from '../assets/scripts/work'

const globalStyles = `
  main {
    overflow: auto;
    align-items: start !important;
    padding: 1em max(calc((100vw - 1440px) / 2), 2ch);
  }

  @media print {
    body > *:not(#app),
    #app > *:not(main),
    main > *:not(.legal-page) {
      display: none;
    }

    main {
      padding: 0;
    }

    @page {
      margin: 0;
      size: a4 portrait;
    }
  }
`

let styleElement = null

onMounted(() => {
  styleElement = document.createElement('style')
  styleElement.id = 'a4page-styles'
  styleElement.innerHTML = globalStyles
  document.head.appendChild(styleElement)
})

onUnmounted(() => {
  if (styleElement) {
    document.head.removeChild(styleElement)
  }
})

const notablePockets = toolbelt
  .filter((pocket) => pocket.items.some((item) => item.noteworthy))
  .map((pocket) => {
    return {
      name: pocket.name,
      items: pocket.items.filter((item) => item.noteworthy),
    }
  })

function download() {
  window.open('/docs/HarrisonCookCV(current).pdf', '_blank')
}

function print() {
  window.print()
}
</script>

<template>
  <div class="actions">
    <button @click="download">
      <Icon icon="mdi:download" />
      <span>Download</span>
    </button>
    <button @click="print">
      <Icon icon="mdi:printer" />
      <span>Print</span>
    </button>
  </div>

  <div class="a4page">
    <hgroup>
      <h1>Harrison Cook</h1>
      <h2>Software Engineer · Full-Stack Development · Cloud Architecture</h2>
      <a href="https://about.honsoncooky.dev">https://about.honsoncooky.dev</a>
    </hgroup>

    <section>
      <h1>Overview</h1>
      <p>
        A Software Engineer with {{ workYearsRounded() }} years of professional experience delivering maintainable,
        production-ready systems in <code>TypeScript</code> and <code>C#</code> within complex, high-stakes
        environments. My background in musical theatre provides a unique foundation in creative problem-solving,
        collaboration, and clear communication. Transitioning from stage lights to system calls, I am now actively
        specializing in low-level and systems programming with <code>C</code>, <code>Zig</code>, and <code>Lua</code>,
        driven to build the elegant, high-performance engines that power games and advanced software.
      </p>
    </section>

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
          <li>Dean's List for Academic Excellence; 2018 - 2021</li>
        </ul>
      </div>
    </section>

    <section>
      <h1>Notable Skills</h1>
      <ul class="list-list">
        <li v-for="pocket in notablePockets">
          <b>{{ pocket.name }}</b>
          <ul>
            <li v-for="item in pocket.items">
              <code>{{ item.name }}</code>
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <footer>References available on request: Xero, Z-Energy, + More</footer>
  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-bottom: 1em;
}

.actions button {
  display: flex;
  flex-direction: row;
  gap: 1ch;
  border: 1px solid var(--border);
  padding: 0.2em 2ch;
  font-size: 1.2em;
}

.a4page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border);
  padding: 2em 3em;
  width: 210mm;
  height: 297mm;
  font-size: 10pt;
}

* {
  font-family: 'Roboto';
}

p,
li {
  max-width: unset;
  text-align: unset;
}

li {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  list-style-position: inside;
}

hgroup {
  display: flex;
  flex-direction: column;
  align-items: center;
}

hgroup > h1 {
  font-size: 20pt;
}

hgroup > h2 {
  font-weight: normal;
  font-size: 13pt;
}

hr {
  margin: 0 2ch;
  border: 1px solid var(--border);
  border-style: dashed;
  width: 100%;
}

section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

section > h1 {
  font-weight: normal;
  font-size: 18pt;
}

.major {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
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

.major > .info > .date {
  min-width: 20ch;
}

.list-list {
  gap: 1em;
  column-count: 2;
}

.list-list > li {
  margin-bottom: 1em;
}

.list-list > li > ul {
  column-count: 2;
  margin-left: 2ch;
}

@media print {
  .a4page {
    margin: 0;
    box-shadow: none;
    border: none;
  }

  .actions {
    display: none;
  }
}
</style>
