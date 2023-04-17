<template>
  <div class="header-container">
    <BreadCrumb />
    <div class="header-right">
      <!-- <Icon class="item" icon="svg-icon:search" :size="30"/> -->
      <SvgIcon class="item" icon="svg-icon:GitHub" :size="30" @click="goGitHub" />
      <SvgIcon class="item" :icon="fullIcon" :size="30" @click="fullScreenBtn" />
      <!-- <el-dropdown trigger="click">
        <Icon class="item" icon="svg-icon:fontSize" :size="30"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Default</el-dropdown-item>
            <el-dropdown-item>Medium</el-dropdown-item>
            <el-dropdown-item>Small</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        </el-dropdown> -->
      <!-- <el-dropdown trigger="click">
        <Icon class="item" icon="svg-icon:switchLanguage" :size="30"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
        </el-dropdown> -->
      <el-dropdown trigger="click">
        <img class="item" src="@/assets/img/headPhoto.jpeg" alt="头像" style="width: 40px; border-radius: 6px" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toPersonalCenter"> 个人中心 </el-dropdown-item>
            <el-dropdown-item @click="docsClick"> Docs </el-dropdown-item>
            <el-dropdown-item divided @click="logOut"> 退出登录 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from "@/layout/components/HeaderBar/component/BreadCrumb.vue";
import { ElMessageBox } from "element-plus";
import screenFull from "screenfull";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SvgIcon from "@/components/Icon/SvgIcon.vue";

// 退出登录
const router = useRouter();
const logOut = () => {
  router.push({ name: "login" });
};
// 跳转到GitHub
const goGitHub = () => {
  window.open("https://github.com/kunisstrong/vue3-management-system", "_bank");
};
// 全屏图标
const fullIcon = ref("svg-icon:fullScreen");
// 全屏
const fullScreenBtn = () => {
  if (screenFull.isFullscreen) {
    screenFull.toggle();
    fullIcon.value = "svg-icon:fullScreen";
  } else {
    screenFull.toggle();
    fullIcon.value = "svg-icon:reduceScreen";
  }
};
/* 点击跳转文档 */
const docsClick = () => {
  ElMessageBox.alert("功能尚未完成", "提示", {
    confirmButtonText: "OK",
    type: "warning"
  });
};
// 跳转到个人中心
const toPersonalCenter = () => {
  router.push({ name: "PersonalCenter" });
};
</script>

<style lang="scss" scoped>
.header-container {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .item {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>
