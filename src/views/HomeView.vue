<script setup lang="ts">
import FlexPage from '../components/FlexPage.vue'
import FlexCard from '../components/FlexCard.vue'
</script>

<template>
  <FlexPage>
    <FlexCard>
      <img src="../assets/imgs/profile.png" alt="profile.png" class="profile-img" />
    </FlexCard>
    <FlexCard> </FlexCard>
  </FlexPage>
</template>

<style lang="css" scoped>
.profile-img {
  display: flex;
  flex: 1;
  object-fit: contain;
}
</style>
