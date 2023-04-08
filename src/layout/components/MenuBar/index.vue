<template>
  <ElMenu :default-active='activeKey' class="ElMenu" :collapse="collapsed" active-text-color="#409eff" text-color="#fff"
          background-color="$menuBg">

    <template v-for="(item) in MenuList" :key=item.meta.id>
      <el-sub-menu v-if="item.children" :index="item.meta.id">
        <template #title>
          <Icon :icon="item.meta.icon" :size="30"/>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.meta.id"
            :index="subItem.meta.id"
            @click=toPath(item.path,subItem.path)>
          <template #title> {{ subItem.meta.title }}</template>
        </el-menu-item>
      </el-sub-menu>

      <ElMenuItem v-else @click=toPath(item.path) :index="item.meta.id">
        <Icon :icon="item.meta.icon" :size="30"/>
        <template #title> {{ item.meta.title }}</template>
      </ElMenuItem>
    </template>
  </ElMenu>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { MenuList } from "@/router"
import { ref, watch } from "vue"

/* 接受父组件传来控制面包屑的参数collapse */
defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

/* 点击跳转路由 */
const router = useRouter()
const toPath = (path: string, subPath?: string) => {
  if (subPath) {
    router.push(`/index/${path}/${subPath}`)
  } else {
    router.push(`/index/${path}`)
  }
}

/* 检测路由变化，改变activeKey值 */
const activeKey = ref("1")
const route = useRoute()
watch(() => route.path, () => {
  activeKey.value = route.meta.id as string
})

</script>

<style lang="scss" scoped>
.ElMenu {
  min-height: 400px;
  height: 100vh;
  background-color: $menuBg;
  border: none;
}
</style>
