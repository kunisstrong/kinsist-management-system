<!-- 头部跟组件 -->
<template>
  <div class="header-container">
    <BreadCrumb/>
    <div class="header-right">
      <el-icon class="header-right-item" :size="20">
        <Search/>
      </el-icon>
      <el-icon class="header-right-item" :size="20">
        <FullScreen/>
      </el-icon>
      <el-icon class="header-right-item" :size="20">
        <location/>
      </el-icon>
      <div class="user header-right-item">
        <img src="@/assets/icons/svg/vue.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from '@/layout/components/HeaderBar/BreadCrumb.vue';
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
    align-items: center;

    .header-right-item {
      margin-left: 20px;
    }
  }
}
</style>
