<script setup>
import { Icon } from '@iconify/vue'
import AppCard from '@/components/app-card.vue'

function yearsExperience() {
  const start = new Date('2021/08/01') // Account for 3 months at Raygun
  const diff = (new Date() - start) / (1000 * 60 * 60 * 24 * 365)
  return diff.toFixed(2)
}

function openPDF(path) {
  window.open(path, '_blank')
}
</script>

<template>
  <section class="page" id="about">
    <h1>About</h1>
    <div id="about-me-dialog" class="info-section">
      <h1>Overview</h1>
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
        As a Software Engineer with {{ yearsExperience() }} years of industry experience, I currently specialize in
        TypeScript and C# development, complemented by a broad array of integration technologies. My fascination lies in
        understanding software at its most fundamental levels, where hardware and code intersect. I am eager to deepen
        my expertise in engineering highly specialized, efficient solutions that require a comprehensive understanding
        of the hardware they operate upon.
      </p>
      <p>
        Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate,
        and present effectively. I bring a unique blend of creativity and precision to every project, fostering an
        environment of technical excellence and innovation. Ready to build something remarkable? Let’s orchestrate
        solutions together.
      </p>

      <app-card id="showcase">
        <img alt="photography" src="@/assets/example-photo.png" />
        <code>Harrison's Photography - Air Show | 2017</code>
      </app-card>
    </div>

    <div id="education" class="info-section">
      <h1>Education</h1>

      <app-card>
        <hgroup>
          <h2>Bachelor of Engineering</h2>
          <h2>with First Class Honors in Software Engineering</h2>
        </hgroup>
        <ul>
          <li>
            <i>Specialization in Networked Applications.</i>
          </li>
        </ul>
        <div class="information">
          <h3>Victoria University</h3>
          <div>
            <div>
              <icon icon="mdi:calendar"></icon>
              <span>Feb 2018 - Nov 2021</span>
            </div>
            <div>
              <icon icon="mdi:location"></icon>
              <span>Wellington, NZ</span>
            </div>
          </div>
        </div>
        <button @click="openPDF('/docs/HarrisonCookAcademicRecordVIC.pdf')">
          <icon :inline="true" icon="mdi:file-pdf-box"></icon>
          <span>Transcript</span>
        </button>
      </app-card>

      <app-card>
        <hgroup>
          <h2>National Certificate of Educational Achievement</h2>
        </hgroup>
        <ul>
          <li><i>Level 1 with Excellence Endorsement</i></li>
          <li><i>Level 2 with Excellence Endorsement</i></li>
          <li><i>Level 3 with Excellence Endorsement</i></li>
        </ul>
        <div class="information">
          <h3>Marlborough Boys' College</h3>
          <div>
            <div>
              <icon icon="mdi:calendar"></icon>
              <span>Feb 2013 - Nov 2017</span>
            </div>
            <div>
              <icon icon="mdi:location"></icon>
              <span>Marlborough, NZ</span>
            </div>
          </div>
        </div>
        <button @click="openPDF('/docs/HarrisonCookAcademicRecordMBC.pdf')">
          <icon :inline="true" icon="mdi:file-pdf-box"></icon>
          <span>Transcript</span>
        </button>
      </app-card>
    </div>
  </section>
</template>

<style scoped>
#about-me-dialog {
  display: flex;
  flex-direction: column;
}

#showcase {
  margin: 0 auto;
  width: min-content;

  img {
    max-height: 30vh;
  }
}

#education {
  display: flex;
  row-gap: 1rem;
  flex-direction: column;

  hgroup {
    display: flex;
    column-gap: 1ch;
    flex-flow: row wrap;
  }

  .card {
    display: flex;
    row-gap: 1em;
    flex-direction: column;

    > ul {
      margin: 0;
      background-color: var(--surface);
      padding: 0.5em 2ch;
      list-style-position: inside;
    }

    > button {
      display: flex;
      column-gap: 1ch;
      flex-direction: row;
      align-items: center;
      align-self: flex-start;
      background-color: var(--surface);
    }

    .information {
      display: flex;
      column-gap: 2ch;
      row-gap: 0.2em;
      flex-flow: row wrap;
      align-items: center;
      max-width: 800px;

      > h3 {
        flex: 3;
        min-width: 200px;
      }

      > div {
        display: flex;
        row-gap: 0.5em;
        flex-direction: column;
        min-width: 200px;

        > div {
          display: flex;
          column-gap: 1ch;
          flex: 1;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
}
</style>
