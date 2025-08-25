<script setup>
import AboutMeDetail from '../components/About/AboutMeDetail.vue'
import EducationDetail from '../components/About/EducationDetail.vue'
import Toolbelt from '../components/About/Toolbelt.vue'
import WorkDetail from '../components/About/WorkDetail.vue'
import Page from '../components/Page.vue'
</script>

<template>
  <Page title="About">
    <AboutMeDetail />
    <WorkDetail />
    <EducationDetail />
    <Toolbelt />
  </Page>
</template>
