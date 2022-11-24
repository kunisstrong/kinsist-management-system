<template>
  <el-tabs
      v-model="activeKey"
      type="card"
      class="demo-tabs"
      closable
      @tab-click="changeRouter"
      @tab-remove="closeTab"
  >
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
import {computed, onMounted, ref, watch} from "vue"
import {useStore} from "vuex"
import {useRoute, useRouter} from "vue-router"
import {Itab} from "@/store/type"

const store = useStore()
const route = useRoute()
const router = useRouter()
// 动态获取state中的tabList
const tabList = computed(() => {
  return store.getters.getAddTab
})

// 往vuex中添加tab
const addTab = () => {
  const {meta, path} = route
  const tabItem: Itab = {
    path: path,
    title: meta.title as string,
  }
  store.commit("addTab", tabItem)
}
// 检测路由变化，变化则更新key
const activeKey = ref("")
watch(
    () => route.path,
    () => {
      activeKey.value = route.path
      addTab()
    }
)

// 点击tab切换路由
const changeRouter = (event: any) => {
  router.push(event.props.name)
}

// 删除tab
const closeTab = (targetName: string) => {
  // 至少留一个tab
  if (tabList.value.length === 1) {
    return alert("这是最后一个")
  }
  tabList.value.forEach((item: Itab, index: number) => {
    if (targetName === activeKey.value) {
      const nextTab = tabList.value[index + 1] || tabList.value[index - 1]
      activeKey.value = nextTab.path
      router.push(activeKey.value)
    }
  })
  // 更改store中的tabList
  store.commit("delTab", targetName)
}

// 在本地储存tabList
const refresh = () => {
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("TABS_ROUTES", JSON.stringify(tabList.value))
  })

  const session = sessionStorage.getItem("TABS_ROUTES")
  if (session) {
    console.log(JSON.parse(session))
    store.commit("addAllTab", JSON.parse(session))
  }
}

onMounted(() => {
  // 页面打开添加一次tab
  addTab()
  // 挂载本地存储
  refresh()
})
</script>

<style lang="scss" scoped>
.demo-tabs {
  :deep(.is-active) {
    border-bottom: #e5e7ec;
  }

  .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

}


</style>
