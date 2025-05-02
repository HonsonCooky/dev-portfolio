<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="page">
    <div id="intro">
      <h1>Portfolio | Projects</h1>
      <p>
        This page is a collection of the tools, technologies, and projects that define my approach to engineering (or
        that I found interesting). From software development to hands-on hardware customization, each entry reflects my
        commitment to building, refining, and sometimes over-engineering solutions. Whether crafting efficient code,
        assembling high-performance systems, or optimizing keyboards for the perfect feel, this space showcases the
        technical explorations that fuel my passion for creating.
      </p>
    </div>

    <div id="projects">
      <div class="project">
        <h2>Project</h2>
        <div class="project-details">
          <h3>Software</h3>
          <div>
            <icon icon="mdi:calendar"></icon>
            <span></span>
          </div>
          <div>
            <icon icon="mdi:location"></icon>
            <span></span>
          </div>
        </div>
        <div class="project-tools"></div>
        <p></p>
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

#intro {
}
</style>
