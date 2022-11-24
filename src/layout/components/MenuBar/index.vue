<template>
  <el-menu default-active='1' class="el-menu" :collapse="collapsed" active-text-color="#409eff" text-color="#fff"
           background-color="$menuBg">
    <el-menu-item v-for="(item) in menuItem" :key=item.id :index=item.id @click=toPath(item.path)>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title> {{ item.name }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
// 接受父组件传来控制面包屑的参数collapse
defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

// 点击跳转路由
const router = useRouter()
const toPath = (path: string) => {
  router.push(path)
}

// 定义导航菜单对象接口
interface menuItemType {
  id: string
  icon: string
  name: string
  path: string
}

// 生成导航菜单各项对象
const menuItem: menuItemType[] = [
  {
    id: '1',
    icon: 'HomeFilled',
    name: '首页',
    path: '/Home'
  },
  {
    id: '2',
    icon: 'Edit',
    name: '通知',
    path: '/Notification'
  },
  {
    id: '3',
    icon: 'Avatar',
    name: '员工管理',
    path: '/Employee'
  }
]

</script>

<style lang="scss" scoped>
.el-menu {

  min-height: 400px;
  height: 100vh;
  background-color: $menuBg;
  border: none;
}
</style>
