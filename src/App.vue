<script setup>
import { ref } from "vue";
import download from "./components/download.vue";
const fileUrl = ref(
  "http://ln-smart.wxkjtec.com/group2/M00/00/0E/rBJEi2MijM-AA0FtAAsMa7BuvtM801.mp4"
);
</script>

<template>
  <download :fileUrl="fileUrl" />
</template>

<style scoped></style>
