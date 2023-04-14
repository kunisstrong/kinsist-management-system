<template>
  <el-menu :default-active='activeKey' class="ElMenu" :collapse="collapsed" active-text-color="#409eff"
           text-color="#fff"
           background-color="$menuBg">

    <SubMenu v-for="item in MenuList" :key=item.meta.id :item="item"></SubMenu>

  </el-menu>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {MenuList} from "@/router"
import {onMounted, ref, watch} from "vue"
import SubMenu from "@/layout/components/MenuBar/component/SubMenu.vue";

/* 接受父组件传来控制面包屑的参数collapse */
defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

/* 检测路由变化，改变activeKey值 */
const activeKey = ref("")
const route = useRoute()
watch(() => route.path, () => {
  activeKey.value = route.meta.id as string
})

onMounted(() => {
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
