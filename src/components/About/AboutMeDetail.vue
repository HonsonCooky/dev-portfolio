<script setup>
import { workYearsRounded } from '../../assets/scripts/work'
import Details from '../Detail.vue'
</script>

<template>
  <Details title="About Me">
    <p>
      From stage lights to system calls, my journey began in the world of rhythm, performance, and storytelling. The
      arts taught me creativity, timing, and presence - skills that now shape how I design and deliver software. When I
      discovered programming, I saw the same balance of structure and expression I loved in music: disciplined
      frameworks with infinite room for invention.
    </p>
    <p>
      In my {{ workYearsRounded() }} years as a professional Software Engineer, I've focused on building maintainable,
      production-ready systems in <code>TypeScript</code> and <code>C#</code>, often navigating tightly defined specs
      and complex organizational workflows. Outside of my day-to-day role, my passion lies closer to the hardware. I
      actively hone my craft in <code>C</code>, <code>Zig</code>, and <code>Lua</code>, exploring the systems-level
      thinking and performance-driven design required for next-generation games and applications.
    </p>
    <p>
      Whether I'm refining algorithms or architecting systems built to endure, I approach every project with both
      engineering rigor and creative precision. My background in musical theatre sharpened my ability to communicate,
      collaborate, and present, giving me the tools to bridge technical depth with clear, compelling delivery.
    </p>
    <p>
      I'm here to build solutions that last - elegant under the hood, resilient in production, and engineered with a
      performer's attention to detail.
    </p>
  </Details>
</template>
