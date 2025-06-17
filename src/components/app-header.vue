<script setup lang="js">
import { Icon } from '@iconify/vue'
import { toggleTheme } from '@/assets/theme'

function hashNavigation(hash) {
  window.location.hash = hash
}

function _getDominantHash() {
  const sections = document.querySelector('main').querySelectorAll('.page')
  let dominantSection = null
  let maxVisibleHeight = 0

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect()
    const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0))

    if (visibleHeight > maxVisibleHeight) {
      maxVisibleHeight = visibleHeight
      dominantSection = section.id
    }
  })

  return dominantSection
}

function highlightSection(ev) {
  var dominantSection = _getDominantHash()
  Array.from(document.querySelector('header').children).forEach((btn) => {
    if (btn.id == `${dominantSection}-btn`) btn.className = 'selected'
    else btn.className = ''
  })
}

window.addEventListener('scroll', highlightSection)
window.addEventListener('load', highlightSection)
</script>

<template>
  <header>
    <button type="button" title="Home" id="home-btn" @click="hashNavigation('')">Home</button>
    <button type="button" title="About" id="about-btn" @click="hashNavigation('about')">About</button>
    <button type="button" title="Experiences" id="experiences-btn" @click="hashNavigation('experiences')">
      Experience
    </button>
    <button type="button" title="Portfolio" id="portfolio-btn" @click="hashNavigation('portfolio')">Portfolio</button>
    <button type="button" title="Blogs" id="blogs-btn" @click="hashNavigation('blogs')">Blogs</button>
    <button><icon icon="mdi:theme-light-dark" @click="toggleTheme" /></button>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 0 var(--shadow-blur) var(--subtext);
  background-color: var(--crust);
  padding: 0 max(0px, calc((100vw - 1280px) / 2));
  padding-top: 1em;
  width: 100%;
}

button {
  padding: 0.2em 2ch;

  &.selected {
    background-color: var(--surface);
  }

  svg {
    margin: 0;
    font-size: 1em;
  }
}
</style>
