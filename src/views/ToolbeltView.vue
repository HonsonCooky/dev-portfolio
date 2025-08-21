<template>
  <section class="toolbelt">
    <h2>Toolbelt</h2>
    <p class="subtitle">An overview of the technologies that I could work with.</p>
    <div v-for="(category, idx) in toolbelt" :key="idx" class="tool-category">
      <h3>{{ category.name }}</h3>
      <ul>
        <li v-for="(tech, tIdx) in category.items" :key="tIdx">
          {{ tech.name }}
          <span v-if="tech.tags?.length" class="tags"> [{{ tech.tags.join(', ') }}] </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
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
.toolbelt {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.subtitle {
  margin-bottom: 1rem;
  color: var(--text-muted, #666);
}

.tool-category h3 {
  margin-top: 1rem;
}

.tags {
  color: var(--text-muted, #888);
  font-size: 0.85rem;
}
</style>
