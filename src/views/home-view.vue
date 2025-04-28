<script setup>
import AppCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="page">
    <div class="main">
      <div>
        <app-card class="profile">
          <img alt="Profile picture" src="/imgs/profile.png" />
        </app-card>
      </div>
      <div class="title">
        <p>Hi! I'm</p>
        <h1>Harrison Cook.</h1>
        <h2>Software Engineer.</h2>
      </div>
    </div>
    <div class="foot">
      <app-card>
        <icon icon="mdi:language-javascript" />
        <span>JavaScript</span>
      </app-card>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.main {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  flex: 1;
  column-gap: 4ch;
}

.foot {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
</style>
