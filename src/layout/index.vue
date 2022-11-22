<template>
  <div class="layout-container">
    <el-container>
      <el-aside :style="'width: ' + autoWidth">
        <LogoBar :collapsed="collapsed"/>
        <MenuBar :collapsed="collapsed"/>
      </el-aside>
      <el-container>
        <el-header style="background-color: #9ba8b4">
          <el-row>
            <el-icon style="font-size: 26px; color: #000">
              <component :is="collapsed ? Expand : Fold" @click="() => {collapsed = !collapsed}">
              </component>
            </el-icon>
          </el-row>
          <HeaderBar/>
        </el-header>
        <el-main style="background-color: #e9f0f3">
          <TabBar />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// 13.16
import LogoBar from "@/layout/components/LogoBar/index.vue"
import MenuBar from "@/layout/components/MenuBar/index.vue"
import HeaderBar from "@/layout/components/HeaderBar/index.vue"
import TabBar from "@/layout/components/TabBar/index.vue"
import {Expand, Fold} from "@element-plus/icons-vue"
import {computed, ref} from "vue"
import {isMobile} from "@/utils/isMobile"

// 面包屑
let collapsed = ref<boolean>(false)
// 控制菜单宽度
const autoWidth = computed(() => {
  if (collapsed.value && isMobile()) {
    return "0px"
  } else if (collapsed.value) {
    return "64px"
  } else {
    return "200px"
  }
})
console.log("isMobile()-->", isMobile())
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .el-header {
    display: flex;
    align-items: center;
    background-color: #fff;
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
    background-color: rgb(255, 255, 255);
  }
}
</style>
