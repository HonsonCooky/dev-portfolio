<script setup>
import AppCard from '@/components/app-card.vue'
import Toolbelt from '@/assets/toolbelt.js'
import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="page">
    <div class="title-row">
      <div>
        <app-card class="profile">
          <img alt="Profile picture" src="/imgs/profile.png" />
        </app-card>
      </div>
      <div class="intro">
        <p>Kia Ora! I'm</p>
        <h1>Harrison Cook</h1>
        <h2>&lt; Software Engineer /&gt;</h2>
      </div>
    </div>
    <div class="toolbelt">
      <div v-for="env in Toolbelt" class="container">
        <h3 class="env-title">{{ env.environment }}</h3>
        <div class="cards">
          <app-card v-for="item in env.items">
            <icon :icon="item.icon" />
            <span>{{ item.name }}</span>
          </app-card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.title-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1em 4ch;

  .intro {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 1rem 2ch;
    background-color: var(--surface);

    h1 {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: bold;
      margin: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

.toolbelt {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 4ch;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border: 1px solid var(--darkblue);
    padding: 1rem 1ch;
    background-color: var(--crust);

    .env-title {
      font-size: 1.25rem;
      font-weight: bold;
      padding: 0.5rem 0;
      border-bottom: 5px solid var(--darkblue);
    }

    .cards {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem 1ch;

      * {
        background-color: var(--base);
      }
    }
  }
}
</style>
