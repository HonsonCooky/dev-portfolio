<script setup>
import { pockets } from '@/assets/toolbelt.js'
import { Icon } from '@iconify/vue'

const pocketNames = Object.values(pockets).map((p) => p.name)

function selectPocket(pocketName) {
  const pocketSelection = document.getElementById('pocket-selection')
  Array.from(pocketSelection.children).forEach((el) => {
    if (el.classList.contains(pocketName) && !el.classList.contains('selected')) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  })

  const pocketDetails = document.getElementById('pocket-details')
  Array.from(pocketDetails.children).forEach((el) => {
    if (el.classList.contains(pocketName) && !el.classList.contains('selected')) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  })
}
</script>

<template>
  <section class="page">
    <div id="intro" class="info-section">
      <h1>Portfolio</h1>
      <p>
        I love diving into tech beyond the lines of code - experimenting with programming languages, operating systems,
        PC building and keyboard/desk setups. This page is dedicated to highlighting the projects and journeys I've been
        on, as well as outlining all the technologies I've spent time with on my journeys.
      </p>
    </div>

    <div id="toolbelt" class="info-section">
      <h1>Tool Belt</h1>
      <div id="pocket-selection">
        <button :class="`${pName}`" v-for="pName in pocketNames" @click="selectPocket(pName)">
          {{ pName }}
        </button>
      </div>
      <div id="pocket-details">
        <div :class="`${p.name}`" v-for="p in Object.values(pockets)">
          <div :class="`pocket-detail-item`" v-for="[k, v] in Object.entries(p.items)">
            <icon :icon="v.icon"></icon>
            <span class="key">{{ k }}</span>
            <wbr />
            <span class="type">{{ v.type }}</span>
            <span class="uses">[ {{ v.uses.join(', ') }} ]</span>
          </div>
        </div>
      </div>
    </div>

    <div id="projects" class="info-section">
      <h1>Projects</h1>
      <div class="project">
        <h2></h2>
        <div class="project-info">
          <div class="project-tools"></div>
          <div class="project-details"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#toolbelt {
  #pocket-selection {
    display: flex;
    flex-flow: row wrap;
    gap: 0.2rem 1ch;
    background-color: var(--surface);
    position: sticky;
    top: var(--nav-height);

    .selected {
      background-color: var(--blue);
    }
  }

  #pocket-details {
    > * {
      display: none;
      flex-direction: column;
      min-height: 20rem;
    }

    .selected {
      display: flex;
    }

    .pocket-detail-item {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      gap: 0.2rem 1ch;
      padding: 0.5rem 1ch;
      max-width: 90ch;
      margin: 0 auto;

      &:nth-child(even) {
        background-color: var(--surface);
      }

      &:nth-child(odd) {
        background-color: var(--crust);
      }

      .key {
        min-width: 16ch;
        font-weight: bold;
      }

      .type {
        flex: 1;
        font-style: italic;
      }
    }
  }
}

.project {
  margin: 1rem 0;
}
</style>
