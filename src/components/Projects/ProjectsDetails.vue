<script setup>
import { projects } from '../../assets/scripts/projects'
import Detail from '../../components/Detail.vue'
import ContentList from '../ContentList.vue'
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
      <p>
        <span>
          <code v-for="tech in item.technologies">{{ tech }}</code>
        </span>
      </p>
    </ContentList>
  </Detail>
</template>
