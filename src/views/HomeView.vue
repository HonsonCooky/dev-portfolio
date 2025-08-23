<template>
  <div class="page">
    <div class="board"></div>
    <div class="card one">
      <img src="../assets/imgs/profile.png" alt="profile.png" class="profile-img" />
      <h1>Harrison</h1>
      <h1>Cook</h1>
      <hr />
      <h2>Software Engineer</h2>
    </div>
    <div class="card">More</div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.page {
  display: flex;
  flex-flow: row wrap;
}

.card {
  max-width: 100%;

  &.one {
    img {
      border: 1px solid var(--border);
      max-width: 80vw;
      max-height: min(30em, 400px);
    }
  }
}
</style>
