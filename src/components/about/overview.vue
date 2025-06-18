<script setup lang="js">
function yearsExperience() {
  const start = new Date('2021/08/01') // Account for 3 months at Raygun
  const diff = (new Date() - start) / (1000 * 60 * 60 * 24 * 365)
  return diff.toFixed(2)
}
</script>

<template>
  <details id="about-overview" open>
    <summary>Overview</summary>
    <p>
      Growing up in a world filled with music and performing, my early years were shaped by rhythm and stage presence.
      While the arts nurtured my creativity, it was the intricate logic of digital technologies that ultimately captured
      my curiosity.
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
      <code>TypeScript</code> and <code>C#</code> development, complemented by a broad array of integration
      technologies. My fascination lies in understanding software at its most fundamental levels, where hardware and
      code intersect. I am eager to deepen my expertise in engineering highly specialized, efficient solutions that
      require a comprehensive understanding of the hardware they operate upon.
    </p>
    <p>
      Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate, and
      present effectively. I bring a unique blend of creativity and precision to every project, fostering an environment
      of technical excellence and innovation. Ready to build something remarkable? Let’s orchestrate solutions together.
    </p>
  </details>
</template>
