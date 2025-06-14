<script setup>
import { projects } from '@/assets/projects.js'
import { upperFirst } from 'lodash'
import AppCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'

function projectNameClean(key) {
  return key
    .split('-')
    .map((w) => (w.length > 3 ? upperFirst(w) : w.toUpperCase()))
    .join(' ')
}

function toggleProject(key) {
  const project = document.querySelector(`.project.${key}`)
  project.classList.toggle('open')
}
</script>

<template>
  <div id="projects" class="info-section">
    <h1>Projects</h1>
    <div v-for="[k, v] in Object.entries(projects)" :class="`project ${k}`">
      <button @click="toggleProject(k)">{{ projectNameClean(k) }}</button>

      <app-card class="project-desc">
        <div class="inner-content">
          <span>{{ v.description }}</span>
          <div class="tools">
            <icon v-for="icon in new Set(v.technologies.map((t) => t.icon))" :icon="icon"></icon>
          </div>
          <div class="links">
            <a v-for="link in v.links" :href="link">{{ link }}</a>
          </div>
        </div>
      </app-card>
    </div>
  </div>
</template>

<style scoped>
summary {
  cursor: pointer;
}

.project {
  display: flex;
  flex-direction: column;

  button {
    text-align: start;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--surface);
    }
  }

  &.open {
    button {
      background-color: var(--blue);
    }
  }

  a {
    word-break: break-word;
  }

  .project-desc {
    display: none;
  }

  &.open .project-desc {
    display: flex;
  }
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
