<script setup>
import appCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'
import { jobHistory } from '@/assets/jobs.js'
</script>

<template>
  <section class="page" id="experiences">
    <h1>Experience</h1>

    <div class="info-section">
      <app-card v-for="job in jobHistory" class="job">
        <h2>{{ job.position }}</h2>
        <div class="job-details">
          <h3>{{ job.company }}</h3>
          <div>
            <div>
              <icon icon="mdi:calendar"></icon>
              <span>{{ job.from }} - {{ job.to }}</span>
            </div>
            <div>
              <icon icon="mdi:location"></icon>
              <span>{{ job.location }}</span>
            </div>
          </div>
        </div>
        <ul>
          <li v-for="achievement in job.achievements">
            {{ achievement }}
          </li>
        </ul>
      </app-card>
    </div>
  </section>
</template>

<style scoped>
.job {
  .job-details {
    display: flex;
    flex-flow: row wrap;
    max-width: 800px;
    justify-content: space-between;
    column-gap: 1ch;
    row-gap: 0.5rem;
    padding: 0.5em 0;

    h3 {
      min-width: 200px;
    }

    > div {
      display: flex;
      flex-direction: column;
      min-width: 200px;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 1ch;
      }
    }
  }
}
</style>
