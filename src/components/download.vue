<script setup>
import downloadFile from "../utils/index";
const { msg, fileUrl, fileName } = defineProps({
  msg: {
    type: String,
    default: "下载视频",
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
    fileUrl,
    fileName,
    fileType: "",
    isDownload: true,
    onprogress: (progress) => {
      console.log(progress);
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
