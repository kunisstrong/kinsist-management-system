<template>
  <el-tabs v-model="activeKey" type="card" class="demo-tabs">
    <el-tab-pane
        v-for="item in tabList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {Itab} from '@/store/type'

const store = useStore()
// 动态获取state中的tabList
const tabList = computed(() => {
  return store.getters.getAddTab
})

const route = useRoute()
// 往vuex中添加tab
const addTab = () => {
  const {meta, path} = route
  const tabItem: Itab = {
    path: path,
    title: meta.title as string
  }
  store.commit('addTab', tabItem)
}
const activeKey = ref('')
// 检测路由变化，变化则更新key
watch(() => route.path, () => {
      activeKey.value = route.path
      addTab()
    }
)
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
