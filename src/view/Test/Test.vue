<template>
  <div class="tree-table">
    <TreeFilter :tree-data="TreeFilterData" :title="treeTableTitle" :handle-node-click="handleNodeClick" />
    <div class="table-box">
      <ProTable />
      你要加油哦，为了你的大G。
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TreeFilterType } from "@/types/treeFilter";
import ProTable from "@/components/ProTable/ProTable.vue";
import TreeFilter from "@/components/TreeFilter/TreeFilter.vue";

const TreeFilterData = ref([
  {
    id: 1,
    label: "全部"
  },
  {
    id: 2,
    label: "华东分区",
    children: [
      {
        id: 5,
        label: "研发部"
      },
      {
        id: 6,
        label: "市场部"
      },
      {
        id: 7,
        label: "商务部"
      },
      {
        id: 8,
        label: "财务部"
      }
    ]
  },
  {
    id: 3,
    label: "华南分区",
    children: [
      {
        id: 9,
        label: "研发部"
      },
      {
        id: 10,
        label: "市场部"
      },
      {
        id: 11,
        label: "商务部"
      },
      {
        id: 12,
        label: "财务部"
      }
    ]
  },
  {
    id: 4,
    label: "西北分区",
    children: [
      {
        id: 13,
        label: "研发部"
      },
      {
        id: 14,
        label: "市场部"
      },
      {
        id: 15,
        label: "商务部"
      },
      {
        id: 16,
        label: "财务部"
      }
    ]
  }
]);
const treeTableTitle = "部门列表(单选)";
/* 点击节点 */
const handleNodeClick = (data: TreeFilterType) => {
  console.log("data", data);
};
</script>
