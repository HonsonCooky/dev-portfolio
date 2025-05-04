import { pockets } from './toolbelt.js'

/** ====================================================================================================================
 * ENUMS - Common Definitions
 * ================================================================================================================== */
const PROJECT_TYPES = {
  SOFTWARE: 'Software',
  HARDWARE: 'Hardware',
  EXPERIMENTATION: 'Experimentation',
}

const PROJECT_TYPE_DESCRIPTIONS = {
  SOFTWARE: 'Exploring software engineering through design, optimization, and problem-solving.',
  HARDWARE: 'Building and refining computers, keyboards, and other hardware projects.',
  EXPERIMENTATION: 'Testing new ideas, pushing technical boundaries, and discovering better solutions.',
}

/** ====================================================================================================================
 * PROJECT GROUPS - Organized projects by type and significance
 * ================================================================================================================== */
const universityProjects = {
  'bus-sharp': {
    description:
      "A web and mobile solution tackling Wellington's public transport issues, developed as a university team project.",
    links: ['https://github.com/scottzach1/Bus-Sharp-Ionic', 'https://github.com/scottzach1/Bus-Sharp-React-Native'],
    technologies: [
      pockets.nodejsPocket.items.React,
      pockets.mobilePocket.items['React Native'],
      pockets.nodejsPocket.items.TypeScript,
    ],
  },
  'chaps-challenge': {
    description: 'A modern take on Chip’s Challenge, developed in Java Swing as a university group project.',
    links: ['https://github.com/scottzach1/Chaps-Challenge'],
    technologies: [pockets.jvmPocket.items.Java],
  },
  'm5-stack-ble-network': {
    description:
      'A solo project building a network of Arduino M5Stack ESP32 devices for weather data transmission via BLE.',
    technologies: [pockets.idePocket.items.Arduino, pockets.lowLevelPocket.items['C++']],
  },
}

const personalSoftwareProjects = {
  'cookie-nvim': {
    description:
      'A journey into Neovim, learning its powerful features despite a steep learning curve. A future part of my custom setup.',
    links: ['https://github.com/honsoncooky/cookie-nvim'],
    technologies: [pockets.idePocket.items.Neovim, pockets.scriptingLanguagesPocket.items.Lua],
  },
  'cookie-vim': {
    description:
      'An extension of my Neovim challenge, stripping away all language assistance to master programming languages by heart.',
    links: ['https://github.com/honsoncooky/cookie-vim'],
    technologies: [pockets.idePocket.items.Vim],
  },
  'dev-portfolio': {
    description:
      'My developer portfolio—a testing ground for frontend development. While not my expertise, I value building user-facing applications.',
    technologies: [
      pockets.nodejsPocket.items.HTML,
      pockets.nodejsPocket.items.CSS,
      pockets.nodejsPocket.items.JavaScript,
      pockets.nodejsPocket.items['Vue.js'],
    ],
    links: ['https://github.com/honsoncooky/dev-portfolio'],
  },
  'snake-game-rlz': {
    description: 'Experimenting with Zig and Raylib for game development.',
    technologies: [pockets.lowLevelPocket.items.Zig],
    links: ['https://github.com/HonsonCooky/snake-game-rlz'],
  },
}

const personalDevelopmentProjects = {
  'Mouseless-Development': {
    description: 'Enhancing efficiency with keyboard-driven tools, eliminating reliance on a mouse.',
    links: [],
    technologies: [pockets.scriptingLanguagesPocket.items.Bash, pockets.scriptingLanguagesPocket.items.PowerShell],
  },
  'OS Linux': {
    description: 'Exploring Linux through system customization, shell scripting, and open-source workflows.',
    links: [],
    technologies: [],
  },
}

const personalHardwareProjects = {
  'Planck EZ Keyboard': {
    description: 'Customizing the Planck EZ keyboard with QMK firmware and refined key mappings for better ergonomics.',
    links: [],
    technologies: [],
  },
  'Glove80 Keyboard': {
    description: 'Optimizing the ergonomic Glove80 keyboard by refining layout and typing techniques.',
    links: [],
    technologies: [],
  },
  'PC building': {
    description:
      'Building and optimizing personal computers with a focus on performance, component selection, and system architecture.',
    technologies: [],
    notes: '',
    links: [],
  },
}

const projects = {
  ...universityProjects,
  ...personalSoftwareProjects,
  ...personalDevelopmentProjects,
  ...personalHardwareProjects,
}

export { PROJECT_TYPES, PROJECT_TYPE_DESCRIPTIONS, projects }
