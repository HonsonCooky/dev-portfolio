<script setup>
import {useRouter} from "vue-router";
import FolderIcon from "@/components/icons/FolderIcon.vue";

const {to} = defineProps(["to"]);
const router = useRouter();
</script>

<template>
  <button type="button" @click="router.push(to)">
    <FolderIcon/>
    <slot/>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  column-gap: 1ch;
  font-size: 12pt;
  border: .1em solid var(--text);
  outline: none;
  background: none;
  cursor: pointer;
  margin: 0;
  background: transparent;

  .feather-folder {
    width: 2ch;
  }

  &:hover {
    color: var(--base);
    background: var(--yellow);

    .feather-folder {
      stroke: var(--base);
    }
  }
}
</style>