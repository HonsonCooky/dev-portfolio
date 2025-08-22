<template>
  <section class="projects">
    <h2>Projects</h2>
    <div v-for="(group, idx) in projects" :key="idx" class="project-group">
      <h3>{{ group.group }}</h3>
      <div v-for="(proj, pIdx) in group.items" :key="pIdx" class="project-item">
        <h4>{{ proj.name }}</h4>
        <p class="description">{{ proj.description }}</p>
        <p v-if="proj.technologies?.length" class="tech">
          <strong>Technologies:</strong> {{ proj.technologies.join(', ') }}
        </p>
        <p v-if="proj.links?.length" class="links">
          <strong>Links:</strong>
          <span v-for="(link, lIdx) in proj.links" :key="lIdx">
            <a :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
            <span v-if="lIdx < proj.links.length - 1"> , </span>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    group: 'University Projects',
    items: [
      {
        name: 'Bus-Sharp',
        description:
          "A web and mobile solution tackling Wellington's public transport issues, developed as a university team project.",
        technologies: ['React', 'React Native', 'TypeScript'],
        links: [
          { label: 'Bus-Sharp-Ionic', url: '#' },
          { label: 'Bus-Sharp-React-Native', url: '#' },
        ],
      },
      {
        name: 'Chaps Challenge',
        description: "A modern take on Chip's Challenge, developed in Java Swing as a university group project.",
        technologies: ['Java'],
        links: [{ label: 'Chaps-Challenge', url: '#' }],
      },
      {
        name: 'M5-Stack BLE Network',
        description:
          'A solo project building a network of Arduino M5Stack ESP32 devices for weather data transmission via Bluetooth Low Energy.',
        technologies: ['Arduino', 'C++'],
      },
    ],
  },
  {
    group: 'Software Projects',
    items: [
      {
        name: 'Portfolio',
        description: 'My developer portfolio - a playground for frontend development.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        links: [{ label: 'dev-portfolio', url: '#' }],
      },
      {
        name: 'Game Of Life - Monogame',
        description: "A simple implementation of Conway's Game Of Life, using Monogame.",
        technologies: ['C#'],
        links: [{ label: 'game-of-life-monogame', url: '#' }],
      },
    ],
  },
  {
    group: 'Development Projects',
    items: [
      {
        name: 'Terminal Text Editing',
        description:
          "While modern IDEs provided a fantastic starting point for my programming journey, my post university endeavours have explored developer ergonomics. I've been on a quest for the ideal mouseless setup, experimenting with Neovim, pulling back to a simpler Vim setup, and exploring alternatives like Helix.",
        technologies: ['Helix', 'Neovim', 'Vim'],
        links: [
          { label: 'cookie-hx', url: '#' },
          { label: 'cookie-vim', url: '#' },
          { label: 'cookie-nvim', url: '#' },
        ],
      },
      {
        name: 'OS-Linux',
        description: 'Exploring Linux through system customization, shell scripting, and open-source workflows.',
        technologies: ['Linux', 'Bash'],
      },
    ],
  },
  {
    group: 'Hardware Projects',
    items: [
      {
        name: 'Planck-EZ Keyboard',
        description: 'Customizing a 40% Planck EZ keyboard and refined key mappings for better ergonomics.',
      },
      {
        name: 'Glove80 Keyboard',
        description: 'Optimizing the ergonomic Glove80 keyboard by refining layout and typing techniques.',
      },
      {
        name: 'PC-Building',
        description:
          'Building and optimizing personal computers with a focus on performance, component selection, and system architecture.',
        technologies: ['Linux', 'Windows'],
      },
    ],
  },
]
</script>
