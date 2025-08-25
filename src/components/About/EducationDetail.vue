<script setup>
import { Icon } from '@iconify/vue'
import { education } from '../../assets/scripts/education.js'
import ContentList from '../ContentList.vue'
import Details from '../Detail.vue'

function openRecord(path) {
  window.open(path, '_blank')
}
</script>

<template>
  <Details title="Education">
    <ContentList v-for="edu in education">
      <h2>{{ edu.degree }}</h2>
      <p>
        <span>
          <Icon icon="mdi:calendar" />
          {{ edu.dates }}
        </span>
        <span>
          <Icon icon="mdi:location" />
          <span v-for="region in edu.location.split(' ')">
            {{ region }}
          </span>
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
    </ContentList>
  </Details>
</template>
