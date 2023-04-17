<template>
  <div class="filter">
    <div class="title">部门列表(单选)</div>
    <el-input v-model="filterText" type="text" clearable placeholder="请输入关键字进行过滤" />
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      empty-text="无数据"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { ElTree } from "element-plus";

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

const defaultProps = {
  children: "children",
  label: "label"
};

watch(filterText, val => {
  treeRef.value!.filter(val);
});
/* 点击节点 */
const handleNodeClick = (data: Tree) => {
  console.log("data", data);
};
const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.label.includes(value);
};

const data: Tree[] = [
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
];
</script>

<style lang="scss" scoped>
.filter {
  box-sizing: border-box;
  width: 220px;
  height: calc(100% - 20px);
  padding: 18px;
  background-color: #ffffff !important;
  margin-right: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    letter-spacing: 0.5px;
  }

  .el-input {
    margin-top: 10px;
  }

  :deep(.el-tree) {
    margin-top: 10px;
    min-width: 150px;

    .el-tree-node__label {
      font-size: 15px;
      padding: 5px 0;
    }
  }
}
</style>
