<script setup>
import { pockets } from '@/assets/obj-toolbelt.js'
import { Icon } from '@iconify/vue'
import AppCard from '@/components/app-card.vue'

const pocketNames = Object.values(pockets).map((p) => p.name)

function toolNameToKey(toolName) {
  return toolName.replace(/\s/g, '-').replaceAll('.', '_')
}

function selectPocket(pn) {
  const pocketName = toolNameToKey(pn)

  const bar = document.getElementById('pocket-selection-bar')
  Array.from(bar.children).forEach((el) => {
    if (el.classList.contains(pocketName) && !el.classList.contains('selected')) {
      el.classList.add('selected')
    } else {
      el.classList.remove('selected')
    }
  })

  const pockets = document.getElementById('pockets')
  Array.from(pockets.children).forEach((pocket) => {
    if (pocket.classList.contains(pocketName) && !pocket.classList.contains('selected')) {
      pocket.classList.add('selected')
    } else {
      pocket.classList.remove('selected')
    }
  })
}
</script>

<template>
  <div id="toolbelt" class="info-section">
    <h1>Tool Belt</h1>
    <div id="pocket-selection-bar">
      <button
        v-for="pName in pocketNames"
        :class="`${toolNameToKey(pName)}`"
        type="button"
        @click="selectPocket(pName)"
      >
        {{ pName }}
      </button>
    </div>
    <div id="pockets">
      <app-card v-for="p in Object.values(pockets)" :class="`pocket ${toolNameToKey(p.name)}`">
        <div v-for="[k, v] in Object.entries(p.items)" :class="`pocket-item ${toolNameToKey(k)}`">
          <div>
            <icon :icon="v.icon"></icon>
            <span>{{ k }}</span>
          </div>
          <span>{{ v.type }}</span>
          <span>[{{ v.uses.join(', ') }}]</span>
        </div>
      </app-card>
    </div>
  </div>
</template>

<style scoped>
#toolbelt {
  #pocket-selection-bar {
    display: flex;
    flex-flow: row wrap;
    position: sticky;
    background-color: var(--surface);
    top: var(--nav-height);
    column-gap: 2ch;

    button {
      flex: 1;
      white-space: nowrap;
    }

    .selected {
      background-color: var(--blue);
    }
  }

  #pockets {
    .pocket {
      display: none;
      flex-direction: column;
      min-height: 500px;

      .pocket-item {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: 0.2rem 2ch;
        padding: 0.5rem 1ch;
        cursor: pointer;
        width: 100%;

        > * {
          display: flex;
          flex-flow: row nowrap;
          gap: 0.2rem 2ch;
          min-width: 280px;
          flex: 1;

          &:first-child {
            flex: 0;
          }

          &:last-child {
            flex: 0;
          }
        }

        &:nth-of-type(odd) {
          background-color: var(--surface);
        }

        &:nth-of-type(even) {
          background-color: var(--crust);
        }
      }
    }

    > .pocket.selected {
      display: flex;
    }
  }
}
</style>
