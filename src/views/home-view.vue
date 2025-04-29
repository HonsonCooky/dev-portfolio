<script setup>
import AppCard from '@/components/app-card.vue'
import Toolbelt from '@/assets/toolbelt.js'
import { Icon } from '@iconify/vue'

const toolbeltShowcase = Toolbelt.filter((i) => i.highlight)
</script>

<template>
  <section class="page">
    <div class="hero">
      <img alt="Profile picture" src="/imgs/profile.png" />
      <hgroup>
        <p>Hey! I'm</p>
        <h1>Harrison Cook</h1>
        <h2>&lt; Software Engineer /&gt;</h2>
      </hgroup>
    </div>

    <div class="toolbelt">
      <app-card v-for="item in toolbeltShowcase" class="tool">
        <icon :icon="item.icon" :inline="true" />
      </app-card>
    </div>
  </section>
</template>

<style scoped>
.page {
  gap: 3rem;
}

.hero {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem 4ch;

  img {
    background-color: var(--surface);
    box-shadow: inset 0 0 10px var(--darkblue);
  }

  hgroup {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      line-height: 1;
      margin-left: 1ch;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
}

.toolbelt {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem 1ch;
  overflow: hidden;
  height: calc(var(--font-size) * 6);

  .tool {
    background-color: var(--surface);

    svg {
      font-size: calc(var(--font-size) * 3);
    }
  }
}
</style>
