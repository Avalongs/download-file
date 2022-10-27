<script setup>
import downloadFile from "wuxun-downloadfile";
const { msg, fileUrl, fileName } = defineProps({
  msg: {
    type: String,
    default: "下载图片",
  },
  fileUrl: {
    type: String,
    default: "",
  },
  fileName: {
    type: String,
    default: "视频.mp4",
  },
});
const download = () => {
  downloadFile({
    fileUrl: "https://cdn.apedesign.net/github/logo.png",
    fileName: "CDN",
    fileType: "png",
    onprogress: (progress) => {
      // 获取进度条 / get progress
    },
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <button type="button" @click="download">
    {{ msg }}
  </button>
</template>

<style scoped></style>
