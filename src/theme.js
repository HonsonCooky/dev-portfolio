const THEME_DARK = 'dark'
const THEME_LIGHT = 'light'

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT
}

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
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
