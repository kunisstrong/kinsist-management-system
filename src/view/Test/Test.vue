<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    :limit="1"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :http-request="postUpload"
  >
    <template #trigger>
      <el-button type="primary">选择文件</el-button>
    </template>
    <el-button class="ml-3" type="success" @click="submitUpload"> 上传</el-button>
    <template #tip>
      <div class="el-upload__tip text-red">限制上传一个文件，新上传的文件将会覆盖旧文件</div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage, genFileId } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import { uploadAPI } from "@/api/test";

const upload = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = files => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};

const postUpload = async (param: any) => {
  const formData = new FormData();
  console.log("param", param);
  formData.append("file", param.file);
  const res = await uploadAPI(formData);
  if (res.code === 200) {
    console.log(res.msg);
  } else {
    ElMessage({
      message: res.msg,
      type: "error"
    });
  }
};

const submitUpload = () => {
  upload.value!.submit();
};
</script>
