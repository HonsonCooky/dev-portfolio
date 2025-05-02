<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="page">
    <div id="about-me-dialog">
      <h1>Overview</h1>
      <p>
        Growing up in a world filled with music and performance, my early years were shaped by the rhythm of the stage.
        While the arts nurtured my creativity, it was the intricate logic of digital technologies that ultimately
        captured my curiosity.
      </p>
      <p>
        With a strong foundation in calculus and a passion for creative expression through photography and theatre, I
        discovered programming - an elegant fusion of precision and artistry. It's a discipline that, much like music,
        follows structure yet allows for boundless innovation. Today, I've traded compositions for code, crafting
        solutions that harmonize efficiency, structure, and creativity. Whether it's optimizing algorithms or
        engineering robust systems, I thrive on transforming complex theories into practical applications.
      </p>
      <p>
        As a Software Engineer with three years of industry experience, I specialize in TypeScript and C#, complemented
        by a broad array of integration technologies. My fascination lies in understanding software at its most
        fundamental levels, where hardware and code intersect. I am eager to deepen my expertise in engineering highly
        specialized, efficient solutions that require a comprehensive understanding of the hardware they operate upon.
      </p>
      <p>
        Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate,
        and present effectively. I bring a unique blend of creativity and precision to every project, fostering an
        environment of technical excellence and innovation. Ready to build something remarkable? Let’s orchestrate
        solutions together.
      </p>
    </div>

    <div id="education">
      <h1>Education</h1>
      <hgroup>
        <h2>Bachelor of Engineering</h2>
        <h2>with First Class Honors in Software Engineering</h2>
      </hgroup>
      <p>+ Specialization in Networked Applications.</p>
      <div>
        <h3>Victoria University</h3>
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
  </section>
</template>

<style scoped>
#about-me-dialog {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5em;
    margin: 1rem;
  }

  p {
    margin: 1rem 0;
  }
}

#education {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h1 {
    font-size: 2.5em;
    margin: 1rem;
  }

  hgroup {
    display: flex;
    flex-flow: row wrap;
    column-gap: 1ch;

    h2 {
      font-weight: lighter;
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  > div {
    display: flex;
    flex-flow: row wrap;
    max-width: 600px;
    justify-content: space-between;
    column-gap: 1rem;

    h3 {
      font-size: 1.5em;
      line-height: 2rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1ch;
    }
  }
}
</style>
