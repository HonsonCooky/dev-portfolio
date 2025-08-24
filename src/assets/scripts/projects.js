export const projects = [
  {
    group: 'Software Projects',
    items: [
      {
        name: 'Developer Portfolio',
        description:
          'An ever-evolving digital space to showcase my work and experiment with new frontend technologies. This portfolio is built with Vue.js, demonstrating my skills in responsive design and modern web development practices.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        links: [{ label: 'dev-portfolio', url: 'https://github.com/HonsonCooky/dev-portfolio' }],
      },
      {
        name: 'Game Of Life - Monogame',
        description:
          "A C# implementation of Conway's Game of Life, a classic cellular automaton. This project was built using the MonoGame framework to visualize the complex, emergent patterns that arise from a simple set of rules.",
        technologies: ['C#', 'MonoGame'],
        links: [{ label: 'game-of-life-monogame', url: 'https://github.com/HonsonCooky/game-of-life-monogame' }],
      },
    ],
  },
  {
    group: 'Development Environment',
    items: [
      {
        name: 'Terminal Text Editing',
        description:
          'A continuous exploration into boosting development productivity through a mouseless, terminal-based workflow. This involves configuring and customizing powerful editors like Neovim, Vim, and Helix to create a highly efficient and ergonomic setup.',
        technologies: ['Helix', 'Neovim', 'Vim', 'Dotfiles'],
        links: [
          { label: 'cookie-vim', url: 'https://github.com/honsoncooky/cookie-vim' },
          { label: 'cookie-nvim', url: 'https://github.com/honsoncooky/cookie-nvim' },
        ],
      },
      {
        name: 'Linux Workflow',
        description:
          'Deepening my understanding of operating systems by customizing various Linux distributions. This involves shell scripting for automation, managing dotfiles for reproducible environments, and embracing open-source development workflows.',
        technologies: ['Linux', 'Bash'],
      },
    ],
  },
  {
    group: 'University Projects',
    items: [
      {
        name: 'Bus-Sharp',
        description:
          "As part of a university team project, we designed and developed a cross-platform solution to improve the user experience of Wellington's public transport system, built using React and React Native.",
        technologies: ['React', 'React Native', 'TypeScript'],
        links: [
          { label: 'Bus-Sharp-Ionic', url: 'https://github.com/scottzach1/Bus-Sharp-Ionic' },
          { label: 'Bus-Sharp-React-Native', url: 'https://github.com/scottzach1/Bus-Sharp-React-Native' },
        ],
      },
      {
        name: 'Chaps Challenge',
        description:
          "A faithful recreation and modernization of the classic puzzle game 'Chip's Challenge.' This was a university group project developed in Java, utilizing the Swing library for the graphical user interface.",
        technologies: ['Java', 'Swing'],
        links: [{ label: 'Chaps-Challenge', url: 'https://github.com/scottzach1/Chaps-Challenge' }],
      },
      {
        name: 'M5-Stack BLE Network',
        description:
          'A solo university project focused on IoT networking. I developed a mesh network of M5Stack ESP32 devices to collect and transmit weather data wirelessly using Bluetooth Low Energy (BLE).',
        technologies: ['Arduino', 'C++', 'ESP32', 'BLE'],
      },
    ],
  },
  {
    group: 'Hardware Projects',
    items: [
      {
        name: 'Ergonomic Keyboards',
        description:
          'Optimizing custom ergonomic keyboards (Planck EZ, Glove80) by designing and flashing custom keymap layers. This involves configuring firmware (QMK, ZMK) to minimize strain and maximize typing efficiency for programming.',
        technologies: ['QMK', 'ZMK', 'Firmware'],
      },
      {
        name: 'Custom PC Building',
        description:
          'A long-standing hobby of building, troubleshooting, and optimizing custom PCs. This involves careful component selection for specific workloads, understanding system architecture, and managing dual-boot Linux/Windows environments.',
        technologies: ['Hardware', 'Linux', 'Windows'],
      },
    ],
  },
]
