<template>
  <el-pagination
    v-model:page-size="searchParams.pageSize"
    v-model:current-page="searchParams.pageNum"
    background
    :page-sizes="[5, 10, 20, 50]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableTotal"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  searchParams: {
    type: Object,
    required: true
  },
  tableTotal: {
    type: Number,
    required: true
  },
  getTableData: {
    type: Function,
    required: true
  }
});
/* 改变pageSize */
const handleSizeChange = () => {
  props.getTableData();
};
/* 改变pageNum */
const handleCurrentChange = () => {
  props.getTableData();
};
</script>

<style lang="scss" scoped></style>
