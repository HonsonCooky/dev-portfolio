<template>
  <div class="profile-card">
    <div class="profile-info">
      <img src="../../assets/imgs/profile.png" alt="profile.png" />
      <hgroup>
        <h1>Harrison<br />Cook</h1>
        <hr />
        <h2>Software Engineer</h2>
      </hgroup>
    </div>
    <div class="link-icons">
      <a href="mailto:contact@honsoncooky.dev" target="_blank"><Icon icon="mdi:email" /></a>
      <a href="https://github.com/HonsonCooky" target="_blank"><Icon icon="mdi:github" /></a>
      <a href="https://www.linkedin.com/in/HonsonCooky" target="_blank"><Icon icon="mdi:linkedin" /></a>
      <a href="https://www.reddit.com/user/HonsonCooky" target="_blank"><Icon icon="mdi:reddit" /></a>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -1ch 1ch 5px var(--shadow);
}

.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4ch;
}

.profile-info > hgroup {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;

  h1 {
    font-size: 3em;
    line-height: 1;
    text-align: center;
  }

  h2 {
    font-weight: lighter;
    font-size: 1.5em;
    line-height: 1.1;
  }

  hr {
    border: 1px solid var(--keyword);
    width: 50%;
  }
}

.link-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--keyword);
  width: 100%;
  color: var(--bg);
  font-size: 2em;
}

.link-icons > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1ch;
  color: inherit;
}

.link-icons > a:hover {
  color: var(--fg);
}
</style>
