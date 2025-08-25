<script setup>
import Details from '../Detail.vue'

const start = new Date('2021/08/01') // Account for 3 months at Raygun
const years = ((new Date() - start) / (1000 * 60 * 60 * 24 * 365)).toFixed(2)
</script>

<template>
  <Details title="About Me">
    <p>
      From stage lights to server logs, my journey began in the world of rhythm, performance, and storytelling. The arts
      taught me creativity, timing, and presence - skills that now shape how I design and deliver software. When I
      discovered programming, I saw the same balance of structure and expression I loved in music: disciplined
      frameworks with infinite room for invention.
    </p>
    <p>
      In my {{ years }} years as a Software Engineer, I've built maintainable, production-ready systems in
      <code>TypeScript</code> and <code>C#</code>, often within tightly defined specs and complex organizational
      workflows. Outside the brief, I hone my craft in <code>C</code>, <code>Rust</code>, <code>Zig</code>, and
      <code>Lua</code> - exploring systems-level thinking, performance-driven design, and the deep connection between
      code and hardware.
    </p>
    <p>
      Whether I'm refining algorithms for long-term efficiency or architecting systems built to endure, I approach every
      project with both engineering rigor and creative precision. My background in musical theatre sharpened my ability
      to communicate, collaborate, and present, giving me the tools to bridge technical depth with clear, compelling
      delivery.
    </p>
    <p>
      I'm here to build solutions that last - elegant under the hood, resilient in production, and a little artful in
      their execution.
    </p>
  </Details>
</template>
