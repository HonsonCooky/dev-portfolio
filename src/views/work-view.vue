<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="page">
    <div>
      <h1>Experience</h1>

      <div class="job">
        <h2>Software Engineer</h2>
        <div class="job-details">
          <h3>Xero</h3>
          <div>
            <icon icon="mdi:calendar"></icon>
            <span>Aug 2024 - Now</span>
          </div>
          <div>
            <icon icon="mdi:location"></icon>
            <span>Wellington, NZ</span>
          </div>
        </div>
        <ul>
          <li>
            Proactively identified opportunities for process and code quality improvements, actively participating in
            discussions to propose solutions.
          </li>
          <li>
            Contributed to enhancing the quality and stability of existing legacy systems through targeted bug fixes and
            code enhancements.
          </li>
          <li>
            Assisted in analyzing and resolving issues within legacy applications, gaining familiarity with production
            challenges.
          </li>
        </ul>
      </div>

      <div class="job">
        <h2>Software Engineer</h2>
        <div class="job-details">
          <h3>Z Energy</h3>
          <div>
            <icon icon="mdi:calendar"></icon>
            <span>Nov 2021 - Aug 2024</span>
          </div>
          <div>
            <icon icon="mdi:location"></icon>
            <span>Wellington, NZ</span>
          </div>
        </div>
        <ul>
          <li>
            Fast-tracked from Graduate to Engineer within 6 months (bypassing Junior status) due to exceptional
            technical growth and trusted contributions, outpacing my peers.
          </li>
          <li>
            Designed, developed, and deployed full-stack, data-centric microservice solutions using TypeScript or C# in
            Azure.
          </li>
          <li>
            Operated within a robust development environment leveraging Infrastructure as Code (IaC) for cloud resources
            and adhering to rigorous practices for documented, monitored production deployments.
          </li>
        </ul>
      </div>

      <div class="job">
        <h2>Software Engineer Intern</h2>
        <div class="job-details">
          <h3>Raygun</h3>
          <div>
            <icon icon="mdi:calendar"></icon>
            <span>Nov 2020 - Feb 2021</span>
          </div>
          <div>
            <icon icon="mdi:location"></icon>
            <span>Wellington, NZ</span>
          </div>
        </div>
        <ul>
          <li>
            Designed, developed, and published a React Native NPM library, streamlining integration with Raygun's crash
            reporting and monitoring software.
          </li>
          <li>
            Gained hands-on experience in the full lifecycle of software library production, including development,
            packaging, and distribution, now applied in building internal frameworks.
          </li>
          <li>
            Transitioned from academic learning to practical industry development, collaborating in a professional
            software environment to deliver impactful solutions.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 2.5em;
  margin: 1rem;
}

.job {
  padding: 1rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--blue);
  }

  h2 {
    font-weight: lighter;
    font-size: 2em;
    line-height: 3rem;
  }

  .job-details {
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

  ul {
    padding-left: 1.5em;
    margin: 0.5em 0;

    li {
      list-style-type: circle;
      margin: 0.2em 0;
    }
  }
}
</style>
