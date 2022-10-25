import axios from "axios";
function downloadFile({
  fileUrl,
  fileName,
  fileType,
  isDownload,
  onprogress,
  callback,
}) {
  return new Promise((resolve, reject) => {
    axios(fileUrl, {
      method: "get",
      responseType: "blob",
      onDownloadProgress: (evt) => {
        // 进度条
        const progress = parseInt((evt.loaded / evt.total) * 100);
        if (typeof onprogress === "function") {
          onprogress(progress);
        }
      },
    })
      .then((res) => {
        if (isDownload) save(res, fileName, fileType);
        if (typeof callback === "function") {
          callback(res);
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// 下载视频
function save(res, fileName, fileType) {
  const blob = new Blob([res.data]);
  const a = document.createElement("a");
  a.download = fileType ? fileName + "." + fileType : fileName;
  a.href = URL.createObjectURL(blob);
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

export default downloadFile;
