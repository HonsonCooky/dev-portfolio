<template>
  <section class="education">
    <div v-for="(edu, idx) in education" :key="idx" class="education-item">
      <h2 class="degree">{{ edu.degree }}</h2>
      <p class="meta">
        <span class="date">📅 {{ edu.dates }}</span> &nbsp; | &nbsp;
        <span class="location">📍 {{ edu.location }}</span>
      </p>
      <ul class="achievements">
        <li v-for="(point, pIdx) in edu.achievements" :key="pIdx">
          {{ point }}
        </li>
      </ul>
      <p v-if="edu.transcript" class="transcript">
        <a :href="edu.transcript" target="_blank" rel="noopener"> View Transcript (PDF) </a>
      </p>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    degree: 'Bachelor of Engineering (First Class Honors), Software Engineering',
    dates: 'Feb 2018 - Nov 2021',
    location: 'Victoria University, Wellington, NZ',
    achievements: [
      'Specialization: Networked Applications',
      "2021 Dean's List for Academic Excellence",
      "2020 Dean's List for Academic Excellence",
      "2019 Dean's List for Academic Excellence",
      "2018 Dean's List for Academic Excellence",
    ],
    transcript: '/pdfs/vuw-transcript.pdf', // replace with actual path
  },
  {
    degree: 'National Certificate of Educational Achievement',
    dates: 'Feb 2013 - Nov 2017',
    location: "Marlborough Boys' College, Marlborough, NZ",
    achievements: [
      'Level 1 with Excellence Endorsement',
      'Level 2 with Excellence Endorsement',
      'Level 3 with Excellence Endorsement',
    ],
    transcript: '/pdfs/mbc-transcript.pdf', // replace with actual path
  },
]
</script>

<style scoped>
.education {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.degree {
  font-weight: 600;
  font-size: 1.25rem;
}

.meta {
  margin: 0.25rem 0 0.75rem;
  color: var(--text-muted, #666);
  font-size: 0.95rem;
}

.achievements {
  padding-left: 1.25rem;
  list-style: disc;
}

.achievements li {
  margin-bottom: 0.5rem;
}

.transcript a {
  color: var(--link-color, #3b82f6);
  text-decoration: underline;
}
</style>
