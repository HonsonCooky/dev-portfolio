<template>
  <div class="intro-card">
    <h1>Kia ora!</h1>
    <h3>Engineering Excellence - Now Taking Center Stage.</h3>

    <div class="button-group">
      <button @click="openResume">Resume</button>
      <button @click="() => router.push('/projects')">Projects</button>
    </div>

    <p>
      From stage lights to server logs, I've always thrived where structure meets creativity. Now a Software Engineer
      specializing in TypeScript and C#, I craft systems that are as elegant under the hood as they are enduring in the
      field. Every project is a chance to turn complexity into clarity - and deliver work that performs for years to
      come.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.intro-card {
  display: flex;
  flex: 1 0 280px;
  flex-direction: column;

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
}

.button-group {
  display: flex;
  flex-flow: row wrap;
  gap: 2ch;
  margin: 2em 0;

  > button {
    border: 1px solid var(--border);
    padding: 0.2em 2ch;
    font-size: 1.2em;
  }
}
</style>
