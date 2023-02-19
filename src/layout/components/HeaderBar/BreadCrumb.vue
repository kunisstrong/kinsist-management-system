<!-- 面包屑 -->
<template>
  <div class="breadcrumb-container" style="margin-left: 15px;">
    <el-breadcrumb style="cursor: pointer">
      <el-breadcrumb-item @click="changePath(item.path)" v-for="(item, index) in breadcrumb" :key="index">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
let breadcrumb: any = ref([])
// 更新面包屑中内容
const updateBreadcrumb = (): void => {
  breadcrumb.value = route.matched
}

updateBreadcrumb()
// 检测路由发生变化
watch(() => route.path, () => {
  updateBreadcrumb()
})

// 点击跳转路由界面
const router = useRouter()
const changePath = (path: string): void => {
  router.push(path)
  // console.log('router', router)
}
</script>

<style lang="scss" scoped>

</style>
