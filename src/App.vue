<script setup>
import { ref } from "vue";
import download from "./components/download.vue";
const fileUrl = ref("www.baidu.com");
</script>

<template>
  <download :fileUrl="fileUrl" />
</template>

<style scoped></style>
