<template>
  <div class="page">
    <Details title="About Me">
      <p>
        Growing up in a world filled with music and performing, my early years were shaped by rhythm and stage presence.
        While the arts nurtured my creativity, it was the intricate logic of digital technologies that ultimately
        captured my curiosity.
      </p>
      <p>
        With a strong foundation in calculus and a passion for creative expression through photography and theatre, I
        discovered programming - an elegant fusion of precision and artistry. It's a discipline that, much like music,
        follows structure yet allows for boundless innovation. Today, I've traded compositions for code, developing
        solutions that balance efficiency, structure, and long-term viability. Whether refining algorithms for sustained
        performance or engineering systems built to endure, I thrive on transforming complex theories into practical,
        resilient applications.
      </p>
      <p>
        As a Software Engineer with 4.06 years of industry experience, I currently specialize in TypeScript and C#
        development, complemented by a broad array of integration technologies. My fascination lies in understanding
        software at its most fundamental levels, where hardware and code intersect. I am eager to deepen my expertise in
        engineering highly specialized, efficient solutions that require a comprehensive understanding of the hardware
        they operate upon.
      </p>
      <p>
        Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate,
        and present effectively. I bring a unique blend of creativity and precision to every project, fostering an
        environment of technical excellence and innovation. Ready to build something remarkable? Let's orchestrate
        solutions together.
      </p>
    </Details>
    <Details title="Education">
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
    </Details>
    <Details title="Work History">
      <div v-for="role in experiences" class="content-item">
        <h2>
          {{ role.title }} <small>@&nbsp;{{ role.company.replaceAll(' ', '&nbsp;') }}</small>
        </h2>
        <p>
          <span class="date">
            <Icon icon="mdi:calendar" />
            {{ role.dates }}
          </span>
          <span class="location">
            <Icon icon="mdi:location" />
            {{ role.location }}
          </span>
        </p>
        <ul>
          <li v-for="(point, pIdx) in role.points" :key="pIdx">
            {{ point }}
          </li>
        </ul>
      </div>
    </Details>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import Details from '../components/Details.vue'
import { education } from '../assets/scripts/education'
import { experiences } from '../assets/scripts/work'

function openRecord(path) {
  window.open(path, '_blank')
}
</script>

<style scoped>
ul {
  margin-left: 2ch;
}

.content-item {
  > h2 {
    margin: 1em 0;
    font-size: 1.2em;

    > small {
      font-size: 0.8em;
    }
  }

  > p {
    display: flex;
    flex-direction: column;
    margin: 1em 0;

    > span {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1ch;
    }
  }
}
</style>
