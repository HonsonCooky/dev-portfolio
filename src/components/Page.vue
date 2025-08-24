<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  isColumn: {
    type: Boolean,
    default: true,
  },
})

window.addEventListener('load', () => {
  const header = getComputedStyle(document.querySelector('header'))
  document.documentElement.style.setProperty('--header-height', header.height)
})

window.addEventListener('load', () => {
  const pageDetails = document.querySelectorAll('details')
  pageDetails.forEach((detail) => {
    detail.addEventListener('click', () => {
      pageDetails.forEach((otherDetail) => {
        if (detail === otherDetail) return
        otherDetail.open = false
      })
    })
  })
})
</script>

<template>
  <div :class="{ page: true, row: !isColumn }">
    <h1 v-if="title" class="title">{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 1em 2ch;
  width: 100%;
  max-width: 1440px;

  &.row {
    flex-flow: row wrap;
    gap: 3em 4ch;
  }

  .title {
    position: sticky;
    top: var(--header-height);
    margin: 1em 0;
    background-color: var(--bg);
    width: 100%;
    font-size: 3em;
  }
}
</style>
