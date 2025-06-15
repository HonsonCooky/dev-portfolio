<script setup>
import { Icon } from '@iconify/vue'
import { jobHistory } from '@/assets/jobs.js'
</script>

<template>
  <section class="page" id="experiences">
    <h1>Experience</h1>

    <div class="info-section">
      <div v-for="job in jobHistory" class="job">
        <h2>{{ job.position }}</h2>
        <div class="job-details">
          <h3>{{ job.company }}</h3>
          <div>
            <icon icon="mdi:calendar"></icon>
            <span>{{ job.from }} - {{ job.to }}</span>
          </div>
          <div>
            <icon icon="mdi:location"></icon>
            <span>{{ job.location }}</span>
          </div>
        </div>
        <ul>
          <li v-for="achievement in job.achievements">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.job {
  padding: 1rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--blue);
  }

  .job-details {
    display: flex;
    flex-flow: row wrap;
    max-width: 600px;
    justify-content: space-between;
    column-gap: 1ch;
    row-gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1ch;
    }
  }
}
</style>
