<script setup>
import {ref} from "vue";
import {useDisplay} from "vuetify/framework";
import {useRouter} from "vue-router";

const router = useRouter();

const {mobile} = useDisplay();
const showDrawer = ref(!mobile.value);

function toggleDrawer() {
  showDrawer.value = mobile.value ? !showDrawer.value : true;
}

function goToHome() {
  router.push("/");
}

function goToAbout() {
  router.push("/about");
}
</script>

<template>
  <v-app-bar elevation="4">
    <v-app-bar-title>C:\HarrisonCook&gt;_</v-app-bar-title>
    <v-app-bar-nav-icon v-show="mobile" @click="toggleDrawer"/>
  </v-app-bar>

  <v-navigation-drawer v-model="showDrawer" :location="`${mobile?'top':'left'}`" elevation="2">
    <v-list-item link @click="goToHome()">\~</v-list-item>
    <v-list-item link @click="goToAbout()">\about</v-list-item>
  </v-navigation-drawer>
</template>
