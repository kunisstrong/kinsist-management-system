<template>
  <ElMenu default-active='1' class="ElMenu" :collapse="collapsed" active-text-color="#409eff" text-color="#fff"
          background-color="$menuBg">

    <template v-for="(item) in menuItem" :key=item.id>

      <ElSubMenu v-if="item.children">
        <template #title>
          <Icon icon="ep:aim" size="30" color="red"/>
          <span>{{ item.name }}</span>
        </template>
        <ElMenuItem v-for="subItem in item.children" :key="subItem.id" @click=toPath(subItem.path) :index=subItem.id>
          <Icon icon="ep:aim" size="30" color="red"/>
          <template #title> {{ subItem.name }}</template>
        </ElMenuItem>
      </ElSubMenu>

      <ElMenuItem v-else @click=toPath(item.path) :index="item.id">
        <Icon icon="ep:aim" size="30" color="red"/>
        <template #title> {{ item.name }}</template>
      </ElMenuItem>

    </template>
  </ElMenu>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {menuItemType} from './type'

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
    path: '/Notification',
    children: [
      {
        id: '2-1',
        icon: 'Edit1',
        name: '通知1',
        path: '/Notification/Notification1'
      },
      {
        id: '2-2',
        icon: 'Edit2',
        name: '通知2',
        path: '/Notification/Notification2'
      }
    ]
  },
  {
    id: '3',
    icon: 'OfficeBuilding',
    name: '个人中心',
    path: '/Center'
  },
  {
    id: '4',
    icon: 'Avatar',
    name: '员工管理',
    path: '/Employee'
  },
  {
    id: '5',
    icon: 'Avatar',
    name: '测试',
    path: '/Test'
  },
]
</script>

<style lang="scss" scoped>
.ElMenu {
  min-height: 400px;
  height: 100vh;
  background-color: $menuBg;
  border: none;
}
</style>
