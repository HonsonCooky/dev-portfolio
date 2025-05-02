<script setup>
import { Icon } from '@iconify/vue'
import { jobHistory } from '@/assets/jobs.js'
</script>

<template>
  <section class="page">
    <div>
      <h1>Experience</h1>

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
h1 {
  font-size: 2.5em;
  margin: 1rem;
}

h2 {
  font-weight: lighter;
  font-size: 2em;
  line-height: 3rem;
}

h3 {
  font-size: 1.5em;
  line-height: 2rem;
}

section > div {
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
}

ul {
  padding-left: 1.5em;
  margin: 0.5em 0;

  li {
    list-style-type: circle;
    margin: 0.2em 0;
  }
}

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
