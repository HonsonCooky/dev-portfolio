<script setup>
import { Icon } from '@iconify/vue'
import { experiences } from '../../assets/scripts/work.js'
import ContentList from '../ContentList.vue'
import Detail from '../Detail.vue'
</script>

<template>
  <Detail title="Work History">
    <ContentList v-for="role in experiences">
      <h2>
        {{ role.title }} <small>@&nbsp;{{ role.company.replaceAll(' ', '&nbsp;') }}</small>
      </h2>
      <p>
        <span class="date">
          <Icon icon="mdi:calendar" />
          {{ role.dates }}
        </span>
        <span class="location">
          <Icon icon="mdi:location" />
          {{ role.location }}
        </span>
      </p>
      <ul>
        <li v-for="point in role.points">
          {{ point }}
        </li>
      </ul>
    </ContentList>
  </Detail>
</template>
