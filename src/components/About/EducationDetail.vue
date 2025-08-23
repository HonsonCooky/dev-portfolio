<template>
  <Details title="Education">
    <ContentList>
      <div v-for="edu in education" class="content-item">
        <h2>{{ edu.degree }}</h2>
        <p>
          <span>
            <Icon icon="mdi:calendar" />
            {{ edu.dates }}
          </span>
          <span>
            <Icon icon="mdi:location" />
            {{ edu.location }}
          </span>
        </p>
        <ul>
          <li v-for="point in edu.achievements">
            {{ point }}
          </li>
        </ul>
        <div v-if="edu.transcript">
          <button @click="() => openRecord(edu.transcript)">View Transcript (PDF)</button>
        </div>
      </div>
    </ContentList>
  </Details>
</template>

<script setup>
import Details from '../Detail.vue'
import ContentList from '../ContentList.vue'
import { Icon } from '@iconify/vue'
import { education } from '../../assets/scripts/education.js'

function openRecord(path) {
  window.open(path, '_blank')
}
</script>
