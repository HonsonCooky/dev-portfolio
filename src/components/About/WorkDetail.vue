<template>
  <Detail title="Work History">
    <ContentList>
      <div v-for="role in experiences" class="content-item">
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
      </div>
    </ContentList>
  </Detail>
</template>

<script setup>
import ContentList from '../ContentList.vue'
import Detail from '../Detail.vue'
import { Icon } from '@iconify/vue'
</script>
