<template>
  <div class="page">
    <details v-for="proj in projects">
      <summary>{{ proj.group }}</summary>
      <div class="detail-content">
        <ul class="projects">
          <li v-for="item in proj.items">
            <h1>{{ item.name }}</h1>
            <p>{{ item.description }}</p>
            <p>
              <span v-for="(tech, idx) in item.technologies">
                <code>{{ tech }}</code>
                <span v-if="idx < item.technologies.length - 1"> | </span>
              </span>
            </p>
            <p v-if="item.links">
              <span v-for="(link, idx) in item.links">
                <a :href="link.url">{{ link.label }}</a>
                <span v-if="idx < item.links.length - 1"> | </span>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </details>
    <details>
      <summary>Toolbelt</summary>
    </details>
  </div>
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
          { label: 'Bus-Sharp-Ionic', url: 'https://github.com/scottzach1/Bus-Sharp-Ionic' },
          { label: 'Bus-Sharp-React-Native', url: 'https://github.com/scottzach1/Bus-Sharp-React-Native' },
        ],
      },
      {
        name: 'Chaps Challenge',
        description: "A modern take on Chip's Challenge, developed in Java Swing as a university group project.",
        technologies: ['Java'],
        links: [{ label: 'Chaps-Challenge', url: 'https://github.com/scottzach1/Chaps-Challenge' }],
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
        links: [{ label: 'dev-portfolio', url: 'https://github.com/HonsonCooky/dev-portfolio' }],
      },
      {
        name: 'Game Of Life - Monogame',
        description: "A simple implementation of Conway's Game Of Life, using Monogame.",
        technologies: ['C#'],
        links: [{ label: 'game-of-life-monogame', url: 'https://github.com/HonsonCooky/game-of-life-monogame' }],
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
          { label: 'cookie-vim', url: 'https://github.com/honsoncooky/cookie-vim' },
          { label: 'cookie-nvim', url: 'https://github.com/honsoncooky/cookie-nvim' },
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

const toolbelt = [
  {
    name: '.NET',
    items: [
      { name: 'ASP.NET', tags: ['Enterprise'] },
      { name: 'Blazor', tags: ['Interest'] },
      { name: 'C#', tags: ['Enterprise', 'Interest'] },
      { name: 'F#', tags: ['Interest'] },
    ],
  },
  {
    name: 'DevOps',
    items: [
      { name: 'AWS', tags: ['Enterprise'] },
      { name: 'Azure', tags: ['Enterprise'] },
      { name: 'Git', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'GitHub (VCS, Actions, Workspace)', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'NewRelic', tags: ['Enterprise'] },
      { name: 'Terraform', tags: ['Enterprise'] },
    ],
  },
  {
    name: 'IDE',
    items: [
      { name: 'Arduino', tags: ['Education'] },
      { name: 'Eclipse', tags: ['Education'] },
      { name: 'IntelliJ IDEA', tags: ['Education'] },
      { name: 'Neovim', tags: ['Interest'] },
      { name: 'Rider', tags: ['Enterprise', 'Interest'] },
      { name: 'Vim', tags: ['Education', 'Interest'] },
      { name: 'Visual Studio', tags: ['Enterprise', 'Interest'] },
      { name: 'Visual Studio Code', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'WebStorm', tags: ['Enterprise', 'Interest'] },
    ],
  },
  {
    name: 'Low Level',
    items: [
      { name: 'C', tags: ['Education', 'Interest'] },
      { name: 'C++', tags: ['Education', 'Interest'] },
      { name: 'Rust', tags: ['Education', 'Interest'] },
      { name: 'Zig', tags: ['Interest'] },
    ],
  },
  {
    name: 'Mobile',
    items: [
      { name: 'Dart', tags: ['Interest'] },
      { name: 'Flutter', tags: ['Interest'] },
      { name: 'React Native', tags: ['Enterprise', 'Interest'] },
    ],
  },
  {
    name: 'Node.js',
    items: [
      { name: 'CSS', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'HTML', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'JavaScript', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'Next.js', tags: ['Interest'] },
      { name: 'React', tags: ['Education', 'Interest'] },
      { name: 'Tailwind', tags: ['Interest'] },
      { name: 'TypeScript', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'Vue.js', tags: ['Enterprise', 'Interest'] },
    ],
  },
  {
    name: 'Operating Systems',
    items: [
      { name: 'Windows', tags: ['Enterprise', 'Education', 'Interest'] },
      { name: 'Linux', tags: ['Education', 'Interest'] },
    ],
  },
  {
    name: 'Scripting',
    items: [
      { name: 'Bash', tags: ['Enterprise', 'Interest'] },
      { name: 'Lua', tags: ['Interest'] },
      { name: 'PowerShell', tags: ['Interest'] },
      { name: 'Ruby', tags: ['Education'] },
    ],
  },
]
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

.projects > li {
  margin-bottom: 2em;
}

.projects > li > p {
  margin: 0.5em 0;
}

a {
  color: var(--fg);
}
</style>
