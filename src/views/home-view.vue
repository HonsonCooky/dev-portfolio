<script setup>
import AppCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'
import { shuffle } from 'lodash/fp.js'
import { toolbelt } from '@/assets/toolbelt.js'

const toolbeltShowcase = shuffle(Object.values(toolbelt))
</script>

<template>
  <section class="page">
    <div class="hero">
      <img alt="Profile picture" src="/imgs/profile.png" />
      <div class="hgroup">
        <span>Hey! I'm</span>
        <h1>Harrison Cook</h1>
        <h2>&lt; Software Engineer /&gt;</h2>
      </div>
    </div>

    <div class="toolbelt">
      <div class="scroll-wrapper">
        <app-card v-for="item in toolbeltShowcase" class="tool">
          <icon :icon="item.icon" :inline="true" />
        </app-card>
        <app-card v-for="item in toolbeltShowcase" class="tool">
          <icon :icon="item.icon" :inline="true" />
        </app-card>
      </div>
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
    box-shadow: inset 0 0 var(--shadow-blur) var(--darkblue);
  }

  .hgroup {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-size: 3rem;
      line-height: 1;
      margin-left: 1ch;
      font-family: Consolas, monospace;
    }

    h2 {
      font-size: 1.5rem;
      font-family: Consolas, monospace;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.toolbelt {
  display: flex;
  width: 100%;
  overflow: hidden;
  z-index: 100;

  .scroll-wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem 1ch;
    animation: scroll 30s linear infinite;
  }

  .tool {
    background-color: var(--surface);
    box-shadow: inset 0 0 var(--shadow-blur) var(--darkblue);
    border-color: var(--surface);

    svg {
      font-size: 2.5rem;
    }
  }
}
</style>
