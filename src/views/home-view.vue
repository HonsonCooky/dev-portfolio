<script setup>
import AppCard from '@/components/app-card.vue'
import { Icon } from '@iconify/vue'
import { shuffle } from 'lodash/fp.js'
import { pockets } from '@/assets/obj-toolbelt.js'

const toolbeltShowcase = shuffle(
  Object.values(pockets)
    .map((p) => Object.values(p.items))
    .flat(),
)
</script>

<template>
  <section class="page" id="home">
    <div class="hero">
      <img alt="Profile picture" src="@/assets/profile.png" />
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
  min-height: calc(100vh - var(--nav-height) + var(--shadow-blur));
}

.hero {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem 4ch;

  img {
    box-shadow: inset 0 0 var(--shadow-blur) var(--darkblue);
    background-color: var(--surface);
  }

  .hgroup {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 1rem;

    h1 {
      margin-left: 1ch;
      font-size: 3rem;
      line-height: 1;
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
  z-index: 100;
  width: 100%;
  overflow: hidden;

  .scroll-wrapper {
    display: flex;
    flex-flow: row nowrap;
    gap: 1rem 1ch;
    animation: scroll 30s linear infinite;
  }

  .tool {
    box-shadow: inset 0 0 var(--shadow-blur) var(--darkblue);
    border-color: var(--surface);
    background-color: var(--surface);

    svg {
      font-size: 2.5rem;
    }
  }
}
</style>
