<template>
  <div class="page">
    <Details v-for="proj in projects" :title="proj.group">
      <ul class="content-list">
        <li v-for="item in proj.items">
          <h1>{{ item.name }}</h1>
          <p>{{ item.description }}</p>
          <p>
            <span v-for="(tech, idx) in item.technologies">
              <code>{{ tech }}</code>
              <span v-if="idx < item.technologies.length - 1"> | </span>
            </span>
          </p>
          <p v-if="item.links">
            <span v-for="(link, idx) in item.links">
              <a :href="link.url">{{ link.label }}</a>
              <span v-if="idx < item.links.length - 1"> | </span>
            </span>
          </p>
        </li>
      </ul>
    </Details>

    <Details title="Toolbelt">
      <ul class="content-list">
        <li v-for="pocket in toolbelt">
          <h1>{{ pocket.name }}</h1>
          <p>
            <span v-for="(item, idx) in pocket.items">
              <span>{{ item.name }}</span>
              <span v-if="idx < pocket.items.length - 1"> | </span>
            </span>
          </p>
          <p>
            <span v-for="(useCase, idx) in new Set(pocket.items.flatMap((item) => item.tags))" class="where">
              <Icon icon="mdi:tick" />
              <span>{{ useCase }}</span>
            </span>
          </p>
        </li>
      </ul>
    </Details>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import Details from '../components/Details.vue'
import { projects } from '../assets/scripts/projects'
import { toolbelt } from '../assets/scripts/toolbelt'
</script>

<style scoped>
details {
  width: 100%;

  summary {
    font-size: 1.4em;
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 3em;
  padding: 1ch;
}

ul {
  margin-left: 2ch;
}

.content-list > li {
  margin-bottom: 2em;
}

.content-list > li > p {
  margin: 0.5em 0;
}

a {
  color: var(--fg);
}

.where {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1ch;
}
</style>
