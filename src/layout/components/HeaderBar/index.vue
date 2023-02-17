<!-- 头部跟组件 -->
<template>
  <div class="header-container">
    <BreadCrumb/>
    <div class="header-right">
      <Icon icon="svg-icon:search" :size="30"/>
      <Icon icon="svg-icon:fullScreen" :size="30"/>
      <el-dropdown trigger="click">
        <Icon icon="svg-icon:fontSize" :size="30"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Default</el-dropdown-item>
            <el-dropdown-item>Medium</el-dropdown-item>
            <el-dropdown-item>Small</el-dropdown-item>
            <el-dropdown-item>Mini</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click">
        <Icon icon="svg-icon:switchLanguage" :size="30"/>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click">
        <img src="src/assets/img/headPhoto.jpeg" alt="头像" style="width: 40px; border-radius: 6px">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>项目地址</el-dropdown-item>
            <el-dropdown-item>Docs</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>


    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/layout/components/HeaderBar/BreadCrumb.vue'
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
    width: 220px;

    & {
      cursor: pointer;
    }
  }
}
</style>
