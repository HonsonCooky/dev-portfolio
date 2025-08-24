<script setup>
import Detail from '../Detail.vue'
import ContentList from '../ContentList.vue'
import { Icon } from '@iconify/vue'
import { toolbelt } from '../../assets/scripts/toolbelt.js'
</script>

<template>
  <Detail title="Toolbelt">
    <ContentList v-for="pocket in toolbelt">
      <h2>{{ pocket.name }}:</h2>
      <p>
        <span v-for="useCase in new Set(pocket.items.flatMap((item) => item.tags).sort())">
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
