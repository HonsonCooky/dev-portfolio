<template>
  <div class="page">
    <details>
      <summary>About Me</summary>
      <div class="detail-content">
        <p>
          Growing up in a world filled with music and performing, my early years were shaped by rhythm and stage
          presence. While the arts nurtured my creativity, it was the intricate logic of digital technologies that
          ultimately captured my curiosity.
        </p>
        <p>
          With a strong foundation in calculus and a passion for creative expression through photography and theatre, I
          discovered programming - an elegant fusion of precision and artistry. It's a discipline that, much like music,
          follows structure yet allows for boundless innovation. Today, I've traded compositions for code, developing
          solutions that balance efficiency, structure, and long-term viability. Whether refining algorithms for
          sustained performance or engineering systems built to endure, I thrive on transforming complex theories into
          practical, resilient applications.
        </p>
        <p>
          As a Software Engineer with 4.06 years of industry experience, I currently specialize in TypeScript and C#
          development, complemented by a broad array of integration technologies. My fascination lies in understanding
          software at its most fundamental levels, where hardware and code intersect. I am eager to deepen my expertise
          in engineering highly specialized, efficient solutions that require a comprehensive understanding of the
          hardware they operate upon.
        </p>
        <p>
          Beyond technical expertise, my background in musical theatre has honed my ability to communicate, collaborate,
          and present effectively. I bring a unique blend of creativity and precision to every project, fostering an
          environment of technical excellence and innovation. Ready to build something remarkable? Let's orchestrate
          solutions together.
        </p>
      </div>
    </details>
    <details>
      <summary>Education</summary>
      <div class="detail-content">
        <div v-for="(edu, idx) in education" :key="idx" class="content-item">
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
            <li v-for="(point, pIdx) in edu.achievements" :key="pIdx">
              {{ point }}
            </li>
          </ul>
          <div v-if="edu.transcript">
            <button @click="() => openRecord(edu.transcript)">View Transcript (PDF)</button>
          </div>
        </div>
      </div>
    </details>
    <details>
      <summary>Work History</summary>
      <div class="detail-content">
        <div v-for="(role, idx) in experiences" :key="idx" class="content-item">
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
      </div>
    </details>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

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
    transcript: '/docs/HarrisonCookAcademicRecordVIC.pdf',
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
    transcript: '/docs/HarrisonCookAcademicRecordMBC.pdf',
  },
]

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

function openRecord(path) {
  window.open(path, '_blank')
}
</script>

<style scoped>
details {
  width: 100%;

  summary {
    font-size: 1.4em;
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 3em;
  padding: 1ch;
}

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
