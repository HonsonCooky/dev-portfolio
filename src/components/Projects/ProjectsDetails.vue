<script setup>
import ContentList from '../ContentList.vue'
import Detail from '../../components/Detail.vue'
import { projects } from '../../assets/scripts/projects'
</script>

<template>
  <Detail v-for="proj in projects" :title="proj.group">
    <ContentList v-for="item in proj.items">
      <h2>{{ item.name }}</h2>
      <p>
        <span>
          {{ item.description }}
        </span>
        <span>
          <a v-for="(link, idx) in item.links" :href="link.url">{{ link.label }}</a>
        </span>
      </p>
      <ul>
        <li v-for="tech in item.technologies">
          <code>{{ tech }}</code>
        </li>
      </ul>
    </ContentList>
  </Detail>
</template>
