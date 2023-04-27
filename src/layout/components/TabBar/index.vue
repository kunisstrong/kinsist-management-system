<template>
  <el-tabs v-model="activeKey" type="card" class="demo-tabs" closable @tab-click="changeRouter" @tab-remove="closeTab">
    <el-tab-pane v-for="item in tabList" :key="item.path" :label="item.title" :name="item.path" />
  </el-tabs>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Itab } from "@/store/type";
import { useTabStore } from "@/store/modules/tabBar";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();

const tabStore = useTabStore();
const { getAddTab } = storeToRefs(tabStore);

// 动态获取state中的tabList
const tabList = computed(() => {
  return getAddTab.value;
});

/* 路由发生变化，往vuex中添加tab */
const addTab = () => {
  const { meta, path } = route;
  const tabItem: Itab = {
    path,
    title: meta.title as string
  };

  tabStore.addTab(tabItem);
};

// 检测路由变化，变化则更新key
const activeKey = ref("/index/Home");
watch(
  () => route.path,
  () => {
    activeKey.value = route.path;
    addTab();
  }
);

// 点击tab切换路由
const changeRouter = (event: any) => {
  router.push(event.props.name);
};

// 删除tab
const closeTab = (targetName: string) => {
  // 至少留一个tab
  if (tabList.value.length === 1) {
    return alert("这是最后一个");
  }
  tabList.value.forEach((item: Itab, index: number) => {
    if (targetName === activeKey.value) {
      const nextTab = tabList.value[index + 1] || tabList.value[index - 1];
      activeKey.value = nextTab.path;
      router.push(activeKey.value);
    }
  });

  // 更改store中的tabList
  tabStore.delTab(targetName);
};

// 在本地储存tabList
const refresh = () => {
  /* 当前路由信息 */
  // console.log("rout_path", route.path)
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("TABS_ROUTES", JSON.stringify(tabList.value));
    sessionStorage.setItem("CURRENT_PATH", JSON.stringify(route.path));
  });

  const tabsRoutes = sessionStorage.getItem("TABS_ROUTES");
  const currentPath = sessionStorage.getItem("CURRENT_PATH");
  if (tabsRoutes) {
    tabStore.addAllTab(JSON.parse(tabsRoutes));
  }
  if (currentPath) {
    router.push(JSON.parse(currentPath));
    activeKey.value = route.path;
  }
};

onMounted(() => {
  // 页面打开添加一次tab
  addTab();
  // 挂载本地存储
  refresh();
});
</script>

<style lang="scss" scoped>
.demo-tabs {
  :deep(.is-active) {
    border-bottom: #e5e7ec;
  }

  .el-tabs__content {
    padding: 32px;
    font-size: 32px;
    font-weight: 600;
    color: #6b778c;
  }
}
</style>
