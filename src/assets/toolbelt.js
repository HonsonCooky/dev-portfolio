/** ====================================================================================================================
 * ENUMS - Common Definitions
 * ================================================================================================================== */

const TOOL_TYPES = {
  CICD: 'Continuous Integration/Continuous Delivery',
  CSP: 'Cloud Service Provider',
  FRAMEWORK: 'Software Framework',
  IDE: 'Integrated Development Environment',
  LANGUAGE: 'Programming Language',
  LIBRARY: 'Software Library',
  MONITORING: 'Application Monitoring',
  TOOL: 'Development Tool | Application',
  VCS: 'Version Control System',
}

const TOOL_TYPE_DESCRIPTIONS = {
  [TOOL_TYPES.CICD]: 'Automated processes to build, test, and deploy code.',
  [TOOL_TYPES.CSP]: 'Rent powerful computers and services instead of buying and managing your own.',
  [TOOL_TYPES.FRAMEWORK]: 'Wrappers around code to focus efforts on the business logic instead of the boilerplate.',
  [TOOL_TYPES.IDE]: 'Code Editors | Write code faster and more efficiently with a given set of features.',
  [TOOL_TYPES.LANGUAGE]: 'A way to build machine code in a human readable format.',
  [TOOL_TYPES.LIBRARY]: 'A suite of ready-made code snippets for reuse.',
  [TOOL_TYPES.MONITORING]: 'Provides insight into the performance and health of an application.',
  [TOOL_TYPES.TOOL]: 'Special program that makes coding tasks easier and faster.',
  [TOOL_TYPES.VCS]: 'Keeps track of changes and enables development with others in a team.',
}

const TOOL_USE_CASES = {
  ENTERPRISE: 'Enterprise',
  OPEN_SOURCE: 'Open Source',
  EDUCATION: 'Education',
  INTEREST: 'Interest',
}

const TOOL_USE_CASE_DESCRIPTIONS = {
  [TOOL_USE_CASES.ENTERPRISE]: 'Used at companies to build and maintain company software systems.',
  [TOOL_USE_CASES.OPEN_SOURCE]: 'Used to aid in the development or maintenance of open source software.',
  [TOOL_USE_CASES.EDUCATION]: 'Used during educational programs to build academic software systems.',
  [TOOL_USE_CASES.INTEREST]: 'Used in personal projects to build software systems for personal use or interest.',
}

/** ====================================================================================================================
 * TOOLBELT POCKETS - Organized tools by environment of use
 * ================================================================================================================== */

const dotnetPocket = {
  'ASP.NET': {
    icon: 'simple-icons:dotnet',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.ENTERPRISE],
  },
  Blazor: {
    icon: 'simple-icons:blazor',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  CSharp: {
    icon: 'devicon-plain:csharp',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
  FSharp: {
    icon: 'devicon-plain:fsharp',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.INTEREST],
  },
}

const devopsPocket = {
  AWS: {
    icon: 'devicon-plain:amazonwebservices-wordmark',
    type: TOOL_TYPES.CSP,
    uses: [TOOL_USE_CASES.ENTERPRISE],
  },
  Azure: {
    icon: 'devicon-plain:azure',
    type: TOOL_TYPES.CSP,
    uses: [TOOL_USE_CASES.ENTERPRISE],
  },
  Git: {
    icon: 'devicon-plain:git',
    type: TOOL_TYPES.TOOL,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  GitHub: {
    icon: 'mdi:github',
    type: TOOL_TYPES.VCS,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  'GitHub Actions': {
    icon: 'devicon-plain:githubactions',
    type: TOOL_TYPES.TOOL,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
  GitLab: {
    icon: 'devicon-plain:gitlab',
    type: TOOL_TYPES.VCS,
    uses: [TOOL_USE_CASES.EDUCATION],
  },
  NewRelic: {
    icon: 'simple-icons:newrelic',
    type: TOOL_TYPES.MONITORING,
    uses: [TOOL_USE_CASES.ENTERPRISE],
  },
  Terraform: {
    icon: 'devicon-plain:terraform',
    type: TOOL_TYPES.TOOL,
    uses: [TOOL_USE_CASES.ENTERPRISE],
  },
}

const idePocket = {
  Eclipse: {
    icon: 'devicon-plain:eclipse',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.EDUCATION],
  },
  'IntelliJ IDEA': {
    icon: 'devicon-plain:intellij',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.EDUCATION],
  },
  Rider: {
    icon: 'devicon-plain:rider',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
  'Visual Studio': {
    icon: 'devicon-plain:visualstudio',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
  'Visual Studio Code': {
    icon: 'devicon-plain:vscode',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  WebStorm: {
    icon: 'devicon-plain:webstorm',
    type: TOOL_TYPES.IDE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
}

const jvmPocket = {
  Java: {
    icon: 'devicon-plain:java',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.EDUCATION],
  },
}

const lowLevelPocket = {
  C: {
    icon: 'devicon-plain:c',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  'C++': {
    icon: 'devicon-plain:cplusplus',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  Rust: {
    icon: 'devicon-plain:rust',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  Zig: {
    icon: 'simple-icons:zig',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.INTEREST],
  },
}

const mobilePocket = {
  Dart: {
    icon: 'devicon-plain:dart',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  Flutter: {
    icon: 'devicon-plain:flutter',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  'React Native': {
    icon: 'mdi:react',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
}

const nodejsPocket = {
  CSS: {
    icon: 'devicon-plain:css3',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  HTML: {
    icon: 'devicon-plain:html5',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  JavaScript: {
    icon: 'devicon-plain:javascript',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  'Next.js': {
    icon: 'devicon-plain:nextjs',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  React: {
    icon: 'mdi:react',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  Tailwind: {
    icon: 'mdi:tailwind',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  TypeScript: {
    icon: 'devicon-plain:typescript',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
  },
  'Vue.js': {
    icon: 'devicon-plain:vuejs',
    type: TOOL_TYPES.FRAMEWORK,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
}

const scriptingLanguagesPocket = {
  Bash: {
    icon: 'devicon-plain:bash',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
  },
  Lua: {
    icon: 'devicon-plain:lua',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  PowerShell: {
    icon: 'devicon-plain:powershell',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.INTEREST],
  },
  Ruby: {
    icon: 'devicon-plain:ruby',
    type: TOOL_TYPES.LANGUAGE,
    uses: [TOOL_USE_CASES.EDUCATION],
  },
}

const allToolsArr = [
  ...Object.values(dotnetPocket),
  ...Object.values(devopsPocket),
  ...Object.values(idePocket),
  ...Object.values(jvmPocket),
  ...Object.values(lowLevelPocket),
  ...Object.values(mobilePocket),
  ...Object.values(nodejsPocket),
  ...Object.values(scriptingLanguagesPocket),
]

const allToolsObj = {
  ...dotnetPocket,
  ...devopsPocket,
  ...idePocket,
  ...jvmPocket,
  ...lowLevelPocket,
  ...mobilePocket,
  ...nodejsPocket,
  ...scriptingLanguagesPocket,
}

export {
  TOOL_TYPES,
  TOOL_TYPE_DESCRIPTIONS,
  TOOL_USE_CASES,
  TOOL_USE_CASE_DESCRIPTIONS,
  dotnetPocket,
  devopsPocket,
  mobilePocket,
  jvmPocket,
  lowLevelPocket,
  nodejsPocket,
  scriptingLanguagesPocket,
  allToolsArr,
  allToolsObj,
}
