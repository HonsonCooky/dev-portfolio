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

const TOOL_USE_CASES = {
  ENTERPRISE: 'Enterprise',
  OPEN_SOURCE: 'Open Source',
  EDUCATION: 'Education',
  INTEREST: 'Interest',
}

/** ====================================================================================================================
 * TOOLBELT POCKETS - Organized tools by environment of use
 * ================================================================================================================== */

const dotnetPocket = {
  name: '.Net',
  items: {
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
  },
}

const devopsPocket = {
  name: 'DevOps',
  items: {
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
  },
}

const idePocket = {
  name: 'IDE',
  items: {
    Arduino: {
      icon: 'devicon-plain:arduino',
      type: TOOL_TYPES.IDE,
      uses: [TOOL_USE_CASES.EDUCATION],
    },
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
    Neovim: {
      icon: 'devicon-plain:neovim',
      type: TOOL_TYPES.IDE,
      uses: [TOOL_USE_CASES.INTEREST],
    },
    Rider: {
      icon: 'devicon-plain:rider',
      type: TOOL_TYPES.IDE,
      uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.INTEREST],
    },
    Vim: {
      icon: 'devicon-plain:vim',
      type: TOOL_TYPES.IDE,
      uses: [TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
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
  },
}

const jvmPocket = {
  name: 'JVM',
  items: {
    Java: {
      icon: 'devicon-plain:java',
      type: TOOL_TYPES.LANGUAGE,
      uses: [TOOL_USE_CASES.EDUCATION],
    },
  },
}

const lowLevelPocket = {
  name: 'Low Level',
  items: {
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
  },
}

const mobilePocket = {
  name: 'Mobile',
  items: {
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
  },
}

const nodejsPocket = {
  name: 'Node.js',
  items: {
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
  },
}

const operatingSystemsPocket = {
  name: 'Operating Systems',
  items: {
    Windows: {
      icon: 'devicon:windows11',
      type: TOOL_TYPES.TOOL,
      uses: [TOOL_USE_CASES.ENTERPRISE, TOOL_USE_CASES.EDUCATION, TOOL_USE_CASES.INTEREST],
    },
    Linux: {
      icon: 'devicon-plain:linux',
      type: TOOL_TYPES.TOOL,
      uses: [TOOL_USE_CASES.INTEREST],
    },
  },
}

const scriptingLanguagesPocket = {
  name: 'Scripting',
  items: {
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
  },
}

const pockets = {
  dotnetPocket,
  devopsPocket,
  idePocket,
  mobilePocket,
  jvmPocket,
  lowLevelPocket,
  nodejsPocket,
  operatingSystemsPocket,
  scriptingLanguagesPocket,
}

export { TOOL_TYPES, TOOL_USE_CASES, pockets }
