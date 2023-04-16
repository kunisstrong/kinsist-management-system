<!-- 面包屑 -->
<template>
  <div
    class="breadcrumb-container"
    style="margin-left: 15px;"
  >
    <el-breadcrumb style="cursor: pointer">
      <template
        v-for="(item, index) in breadcrumb"
        :key="index"
      >
        <el-breadcrumb-item
          v-if="index !== 0"
          @click="changePath(item.path,index)"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const breadcrumb: any = ref([])
// 更新面包屑中内容
const updateBreadcrumb = (): void => {
  breadcrumb.value = route.matched
  // console.log("breadcrumb.value=====", breadcrumb.value
}
updateBreadcrumb()
// 检测路由发生变化
watch(() => route.path, () => {
  updateBreadcrumb()
})

// 点击跳转路由界面
const router = useRouter()
const changePath = (path: string, index: number): void => {
  console.log('route.matched=====', route.matched)
  /* 只有是menu菜单的最后一个才跳转 */
  if (route.matched[index].children.length === 0) {
    router.push(path)
  }
}
</script>
