function updateNavHeader() {
  let nav = document.querySelector('header')
  if (nav) {
    let navHeight = nav.offsetHeight // Get the height of the header
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`)
  }
}

window.addEventListener('load', updateNavHeader)
window.addEventListener('resize', updateNavHeader)
