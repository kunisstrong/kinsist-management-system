<template>
  <div class="filter">
    <div class="title">{{ title }}</div>
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
import { TreeFilterType } from "@/types/treeFilter";

const props = defineProps({
  treeData: {
    required: true,
    type: Array<TreeFilterType>
  },
  title: {
    required: true,
    type: String
  },
  handleNodeClick: {
    required: true,
    type: Function
  }
});

const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

const defaultProps = {
  children: "children",
  label: "label"
};
watch(filterText, val => {
  treeRef.value!.filter(val);
});
const filterNode = (value: string, data: TreeFilterType) => {
  if (!value) return true;
  return data.label.includes(value);
};
const data = ref(props.treeData);
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
