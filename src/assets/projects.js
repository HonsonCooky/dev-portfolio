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
    type: PROJECT_TYPES.SOFTWARE,
    description: 'Built in collaboration with ',
  },
}
const personalSoftwareProjects = {}
const personalDevelopmentProjects = {}
const personalHardwareProjects = {}

const projects = {
  ...universityProjects,
  ...personalSoftwareProjects,
  ...personalDevelopmentProjects,
  ...personalHardwareProjects,
}

export {
  PROJECT_TYPES,
  PROJECT_TYPE_DESCRIPTIONS,
  universityProjects,
  personalSoftwareProjects,
  personalDevelopmentProjects,
  personalHardwareProjects,
  projects,
}
