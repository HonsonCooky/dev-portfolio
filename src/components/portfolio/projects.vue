<script setup>
import { projectList } from '@/assets/projectList.js'
import { upperFirst } from 'lodash'
import AppCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'

function projectNameClean(key) {
  return key
    .split('-')
    .map((w) => (w.length > 3 ? upperFirst(w) : w.toUpperCase()))
    .join(' ')
}
</script>

<template>
  <div id="projects" class="info-section">
    <h1>Projects</h1>
    <div v-for="[k, v] in Object.entries(projectList)" :class="`project ${k}`">
      <details>
        <summary>
          <b>{{ projectNameClean(k) }}</b>
        </summary>
        <app-card>
          <div class="inner-content">
            <span>{{ v.description }}</span>
            <div class="links">
              <a v-for="link in v.links" :href="link">{{ link }}</a>
            </div>
            <div class="tools">
              <icon v-for="tech in v.technologies" :icon="tech.icon"></icon>
            </div>
          </div>
        </app-card>
      </details>
    </div>
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
}

.inner-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 1rem;
}

.links {
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    color: var(--blue);
  }
}

.tools {
  display: flex;
  flex-flow: row wrap;
  gap: 0.2rem 2ch;

  svg {
    width: 2rem;
    height: 2rem;
  }
}
</style>
