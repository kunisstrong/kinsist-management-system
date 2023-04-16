<template>
  <div class="layout-container">
    <el-container>
      <el-aside :style="'width: ' + autoWidth">
        <MenuBar :collapsed="collapsed" />
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <SvgIcon
              style="cursor: pointer"
              :icon="collapsed ? 'svg-icon:expand' : 'svg-icon:fold'"
              :size="25"
              @click="() => { collapsed = !collapsed }"
            />
          </el-row>
          <HeaderBar />
        </el-header>
        <el-main>
          <TabBar />
          <router-view style="background-color: #eeeeee" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

import MenuBar from '@/layout/components/MenuBar/index.vue'
import HeaderBar from '@/layout/components/HeaderBar/index.vue'
import TabBar from '@/layout/components/TabBar/index.vue'
import { computed, ref } from 'vue'
import { isMobile } from '@/utils/isMobile'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'

// 面包屑
const collapsed = ref<boolean>(false)
// 控制菜单宽度
const autoWidth = computed(() => {
  if (collapsed.value && isMobile()) {
    return '0px'
  } else if (collapsed.value) {
    return '64px'
  } else {
    return '200px'
  }
})
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .el-header {
    display: flex;
    align-items: center;
    box-shadow: 0 0 3px #999;
    background-color: white;
  }

  .el-aside {
    background-color: $menuBg;
    color: #fff;
    overflow: hidden;
    word-break: keep-all;
    white-space: nowrap;
    transition: all 0.5s;
  }

  .el-main {
    margin-top: 4px;
    padding: 0;
  }
}
</style>
