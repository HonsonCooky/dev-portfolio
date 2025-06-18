import './assets/main.css'

// ---------------------------------------------------------------------------------------------------------------------
// THEME
// ---------------------------------------------------------------------------------------------------------------------

const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT
}

const updateFaviconColor = () => {
  const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text').trim()
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    fetch(favicon.href)
      .then((response) => response.text())
      .then((svg) => {
        const updatedSvg = svg.replace(/currentColor/g, textColor)
        favicon.href = `data:image/svg+xml;base64,${btoa(updatedSvg)}`
      })
  }
}

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  updateFaviconColor()
}

const getTheme = () => {
  return document.documentElement.getAttribute('data-theme') || getSystemTheme()
}

const toggleTheme = () => {
  const currentTheme = getTheme()
  const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
  setTheme(newTheme)
  return newTheme
}

const resetToSystemTheme = () => {
  const systemTheme = getSystemTheme()
  setTheme(systemTheme)
  return systemTheme
}

// Initialize theme
setTheme(getTheme())

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  setTheme(e.matches ? THEME_DARK : THEME_LIGHT)
})

export { getTheme, setTheme, toggleTheme, resetToSystemTheme }

// ---------------------------------------------------------------------------------------------------------------------
// NAV HEADER
// ---------------------------------------------------------------------------------------------------------------------

function updateNavHeader() {
  let nav = document.querySelector('header')
  if (nav) {
    let navHeight = nav.offsetHeight // Get the height of the header
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`)
  }
}

window.addEventListener('load', updateNavHeader)
window.addEventListener('resize', updateNavHeader)

// ---------------------------------------------------------------------------------------------------------------------
// APP
// ---------------------------------------------------------------------------------------------------------------------

import { createApp } from 'vue'
import App from './app.vue'

const app = createApp(App)
app.mount('#app')
