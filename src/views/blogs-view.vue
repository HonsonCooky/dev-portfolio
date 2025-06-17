<script setup>
import { blogList } from '../assets/data/data-blogs'
import { ref } from 'vue'

const htmlContent = ref('')

async function loadBlog(name, content) {
  htmlContent.value = 'Loading...'
  fetch(`/blogs/${content}`)
    .then((res) => res.text())
    .then((str) => {
      console.log('here', str)
      return str
    })
    .then((str) => (htmlContent.value = str))
    .catch((err) => (htmlContent.value = err.message))
}
</script>

<template>
  <section class="page" id="blogs">
    <h1>Blogs</h1>

    <div v-if="blogList.length == 0">You're Early. Watch this space ...</div>
    <div v-else>
      <div id="blogs-selection-bar">
        <button v-for="{ name, content } in blogList" @click="loadBlog(name, content)">{{ name }}</button>
      </div>

      <div class="blog-container">
        <div id="blog-content" v-html="htmlContent"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-container {
  border: 1px solid var(--darkblue);
  min-height: 3em;
  max-height: 80vh;
  overflow-y: auto;
}

#blogs-selection-bar {
  display: flex;
  position: sticky;
  top: var(--nav-height);
  column-gap: 2ch;
  flex-flow: row wrap;
  background-color: var(--surface);
  min-height: 3em;

  .selected {
    background-color: var(--blue);
  }
}

#blog-content {
}
</style>
