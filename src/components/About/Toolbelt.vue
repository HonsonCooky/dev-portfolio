<script setup>
import { Icon } from '@iconify/vue'
import { toolbelt } from '../../assets/scripts/toolbelt.js'
import ContentList from '../ContentList.vue'
import Detail from '../Detail.vue'

const priority = ['Enterprise', 'Education', 'Interest']
const tagsSorted = (pocket) =>
  [...new Set(pocket.items.flatMap((item) => item.tags))].sort((a, b) => {
    const aIndex = priority.indexOf(a)
    const bIndex = priority.indexOf(b)

    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex
    }
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1

    return a.localeCompare(b)
  })
</script>

<template>
  <Detail title="Toolbelt">
    <ContentList v-for="pocket in toolbelt">
      <h2>{{ pocket.name }}:</h2>
      <p>
        <span v-for="useCase in tagsSorted(pocket)">
          <Icon icon="mdi:tick" />
          <span>{{ useCase }}</span>
        </span>
      </p>
      <p>
        <span>
          <code v-for="item in pocket.items">{{ item.name }}</code>
        </span>
      </p>
    </ContentList>
  </Detail>
</template>
