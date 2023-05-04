<template>
  <div class="pro-box">
    <div class="upload">
      <p>上传的文件会保存到D盘下的img文件夹下，如果D盘下没有则创建img文件夹</p>
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
        <template #default>
          <el-button style="margin-left: 10px; margin-top: -1px" class="ml-3" type="success" @click="submitUpload">
            上传
          </el-button>
        </template>
        <template #tip>
          <div class="el-upload__tip text-red">同时只能上传一个文件，后上传的文件会覆盖上一个文件</div>
        </template>
      </el-upload>
    </div>
    <div class="other">我是的文件操作</div>
  </div>
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
<style lang="scss" scoped>
.pro-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .upload {
    height: 500px;
    p {
      color: red;
    }
  }
}
</style>
