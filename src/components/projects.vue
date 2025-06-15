<script setup>
import appCard from './app-card.vue'
import { Icon } from '@iconify/vue'
import { projects } from '@/assets/projects'
import { upperFirst } from 'lodash'

const projectNames = Object.keys(projects)

function toolNameToKey(key) {
  return key
    .split('-')
    .map((w) => (w.length > 3 ? upperFirst(w) : w.toUpperCase()))
    .join(' ')
}

function selectProject(key) {
  const bar = document.getElementById('project-selection-bar')
  Array.from(bar.children).forEach((el) => {
    if (el.classList.contains(key) && !el.classList.contains('selected')) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  })

  const projects = document.getElementById('projects')
  Array.from(projects.children).forEach((project) => {
    if (project.classList.contains(key) && !project.classList.contains('selected')) {
      project.classList.add('selected')
    } else {
      project.classList.remove('selected')
    }
  })
}
</script>

<template>
  <div id="portfolio" class="info-section">
    <h1>Projects</h1>
    <div id="project-selection-bar">
      <button v-for="pName in projectNames" :class="`${pName}`" type="button" @click="selectProject(pName)">
        {{ toolNameToKey(pName) }}
      </button>
    </div>
    <div id="projects">
      <app-card v-for="[k, v] in Object.entries(projects)" :class="`project ${k}`">
        <div class="content">
          <div class="tools">
            <icon v-for="icon in new Set(v.technologies.map((t) => t.icon))" :icon="icon"></icon>
          </div>
          <span>{{ v.description }}</span>
          <div class="links">
            <a v-for="link in v.links" :href="link">{{ link }}</a>
          </div>
        </div>
      </app-card>
    </div>
  </div>
</template>

<style scoped>
#portfolio {
  #project-selection-bar {
    display: flex;
    flex-flow: row wrap;
    border: 1px solid var(--darkblue);
    position: sticky;
    background-color: var(--surface);
    top: var(--nav-height);

    button {
      flex: 1;
      white-space: nowrap;
    }

    .selected {
      background-color: var(--blue);
    }
  }

  #projects {
    .project {
      display: none;
      min-height: 20vh;
      width: 100%;

      &.selected {
        display: flex;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 1em 1ch;

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
      }
    }
  }
}
</style>
