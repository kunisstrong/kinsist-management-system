<template>
  <el-sub-menu
    v-if="item.children"
    :index="item.meta.id"
  >
    <template #title>
      <SvgIcon
        v-if="item.meta.icon"
        :icon="item.meta.icon"
        :size="30"
      />
      <span>{{ item.meta.title }}</span>
    </template>
    <SubMenu
      v-for="subItem in item.children"
      :key="subItem.meta.id"
      :item="subItem"
    />
  </el-sub-menu>

  <el-menu-item
    v-else
    :index="item.meta.id"
    @click="toPath(item)"
  >
    <SvgIcon
      v-if="item.meta.icon"
      :icon="item.meta.icon"
      :size="30"
    />
    <template #title>
      {{ item.meta.title }}
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import SubMenu from '@/layout/components/MenuBar/component/SubMenu.vue'

/* 点击跳转路由 */
// eslint-disable-next-line vue/require-prop-types
defineProps(['item'])
const router = useRouter()
const toPath = (item: any) => {
  console.log('name------', item)
  router.push({ name: item.name })
}
</script>
