<script setup>
import Toolbelt from '@/components/portfolio/toolbelt.vue'
import Projects from '@/components/portfolio/projects.vue'
</script>

<template>
  <section class="page">
    <div id="intro" class="info-section">
      <h1>Portfolio</h1>
      <p>
        I love diving into tech beyond the lines of code - experimenting with programming languages, operating systems,
        PC building and keyboard/desk setups. This page is dedicated to highlighting the projects and journeys I've been
        on, as well as outlining all the technologies I've spent time with on my journeys.
      </p>
    </div>

    <toolbelt />
    <projects />
  </section>
</template>
