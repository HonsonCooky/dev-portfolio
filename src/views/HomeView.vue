<template>
  <div class="page">
    <div class="profile-card">
      <div class="profile-info">
        <img src="../assets/imgs/profile.png" alt="profile.png" class="profile-img" />
        <hgroup>
          <h1>Harrison<br />Cook</h1>
          <hr />
          <h2>Software Engineer</h2>
        </hgroup>
      </div>
      <div class="link-icons">
        <a href="mailto:contact@honsoncooky.dev"><Icon icon="mdi:email" /></a>
        <a href="https://github.com/HonsonCooky"><Icon icon="mdi:github" /></a>
        <a href="https://www.linkedin.com/in/HonsonCooky"><Icon icon="mdi:linkedin" /></a>
        <a href="https://www.reddit.com/user/HonsonCooky"><Icon icon="mdi:reddit" /></a>
      </div>
    </div>

    <div class="intro-card">
      <h1>Hey!</h1>
      <h3>Engineering Excellence - Now Taking Center Stage.</h3>

      <div class="button-group">
        <button @click="goTo('/resume')">Resume</button>
        <button @click="goTo('/projects')">Projects</button>
      </div>

      <p>
        From stage lights to server logs, I've always thrived where structure meets creativity. Now a Software Engineer
        specializing in TypeScript and C#, I craft systems that are as elegant under the hood as they are enduring in
        the field. Every project is a chance to turn complexity into clarity - and deliver work that performs for years
        to come.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path) {
  router.push(path)
}
</script>

<style lang="css" scoped>
.page {
  display: flex;
  row-gap: 3em;
  flex-flow: row wrap;
}

.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2ch;
  box-shadow: -1ch 1ch 5px var(--shadow);

  .profile-info {
    padding: 4ch;

    hgroup {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em;

      h1 {
        font-size: 2.5em;
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

    > * {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1ch;
      color: inherit;
    }
  }
}

.intro-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  margin-left: 1em;
  max-width: 500px;

  h1 {
    font-weight: bolder;
    font-size: 5em;
    line-height: 1.2;
  }

  h3 {
    margin: 1em 0;
    font-weight: normal;
    font-size: 1.4em;
  }

  .button-group {
    display: flex;
    flex-flow: row wrap;
    gap: 2ch;
    margin: 2em 0;

    button {
      border: 1px solid var(--border);
    }
  }
}
</style>
