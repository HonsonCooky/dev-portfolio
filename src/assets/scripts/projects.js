export const projects = [
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
