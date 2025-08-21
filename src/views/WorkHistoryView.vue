<template>
  <section class="experience">
    <div v-for="(role, idx) in experiences" :key="idx" class="experience-item">
      <h2 class="role">
        {{ role.title }} <span class="company">@ {{ role.company }}</span>
      </h2>
      <p class="meta">
        <span class="date">📅 {{ role.dates }}</span> &nbsp; | &nbsp;
        <span class="location">📍 {{ role.location }}</span>
      </p>
      <ul class="achievements">
        <li v-for="(point, pIdx) in role.points" :key="pIdx">
          {{ point }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: 'Software Engineer',
    company: 'Xero',
    dates: 'Aug 2024 - Now',
    location: 'Wellington, NZ',
    points: [
      'Proactively identified opportunities for process and code quality improvements, actively participating in discussions to propose solutions.',
      'Contributed to enhancing the quality and stability of existing legacy systems through targeted bug fixes and code enhancements.',
      'Assisted in analyzing and resolving issues within legacy applications, gaining familiarity with production challenges.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Z Energy',
    dates: 'Nov 2021 - Aug 2024',
    location: 'Wellington, NZ',
    points: [
      'Fast-tracked from Graduate to Engineer within 6 months (bypassing Junior status) due to exceptional technical growth and trusted contributions, outpacing my peers.',
      'Designed, developed, and deployed full-stack, data-centric microservice solutions using TypeScript or C# in Azure.',
      'Operated within a robust development environment leveraging Infrastructure as Code (IaC) for cloud resources and adhering to rigorous practices for documented, monitored production deployments.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Raygun',
    dates: 'Nov 2020 - Feb 2021',
    location: 'Wellington, NZ',
    points: [
      "Designed, developed, and published a React Native NPM library, streamlining integration with Raygun's crash reporting and monitoring software.",
      'Gained hands-on experience in the full lifecycle of software library production, including development, packaging, and distribution, now applied in building internal frameworks.',
      'Transitioned from academic learning to practical industry development, collaborating in a professional software environment to deliver impactful solutions.',
    ],
  },
]
</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.role {
  font-size: 1.25rem;
  font-weight: 600;
}

.company {
  font-weight: 400;
  color: var(--text-secondary, #555);
}

.meta {
  font-size: 0.95rem;
  margin: 0.25rem 0 0.75rem;
  color: var(--text-muted, #666);
}

.achievements {
  list-style: disc;
  padding-left: 1.25rem;
}

.achievements li {
  margin-bottom: 0.5rem;
}
</style>
