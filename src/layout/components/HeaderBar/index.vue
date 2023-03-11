<!-- 头部跟组件 -->
<template>
  <div class="header-container">
    <BreadCrumb/>
    <div class="header-right">
      <!-- <Icon class="item" icon="svg-icon:search" :size="30"/> -->
      <Icon class="item" @click="goGitHub" icon="svg-icon:GitHub" :size="30"/>
      <Icon class="item" @click="fullScreenBtn" :icon="fullIcon" :size="30"/>
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
        <img class="item" src="src/assets/img/headPhoto.jpeg" alt="头像" style="width: 40px; border-radius: 6px">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toPersonalCenter">
              个人中心
            </el-dropdown-item>
            <el-dropdown-item @click="docsClick">Docs</el-dropdown-item>
            <el-dropdown-item @click="logOut" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>

        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/layout/components/HeaderBar/BreadCrumb.vue'
import { Action, ElMessage, ElMessageBox } from 'element-plus';
import screenFull from 'screenfull'
import { ref } from "vue"
import { useRouter } from "vue-router"

// 退出登录
const router = useRouter()
const logOut = () => {
  router.push({ name: "login" })
}
// 跳转到GitHub
const goGitHub = () => {
  window.open("https://github.com/kunisstrong/vue3-management-system", "_bank")
}
// 全屏图标
const fullIcon = ref('svg-icon:fullScreen')
// 全屏
const fullScreenBtn = () => {
  if (screenFull.isFullscreen) {
    screenFull.toggle()
    fullIcon.value = 'svg-icon:fullScreen'
  } else {
    screenFull.toggle()
    fullIcon.value = 'svg-icon:reduceScreen'
  }
}
/* 点击跳转文档 */
const docsClick = () => {
  ElMessageBox.alert('功能尚未完成', '提示', {
    confirmButtonText: 'OK',
    type: 'warning',
  })
}
// 跳转到个人中心
const toPersonalCenter = () => {
  router.push({ name: 'personalCenter' })
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-right {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item {
      cursor: pointer;
      margin-right: 10px;
    }
  }
}
</style>
