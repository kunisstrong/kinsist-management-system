<!--<template>-->
<!--  <el-form :inline="true" :model="searchParams" class="demo-form-inline dept-search">-->
<!--    <el-form-item label="员工姓名">-->
<!--      <el-input v-model="searchParams.empName" clearable placeholder="请输入员工姓名" />-->
<!--    </el-form-item>-->
<!--    <el-form-item label="所属部门">-->
<!--      <el-select v-model="searchParams.deptId" class="m-2" placeholder="请选择所属部门" size="default" clearable>-->
<!--        <el-option v-for="item in deptList" :key="item.deptId" :label="item.deptName" :value="item.deptId" />-->
<!--      </el-select>-->
<!--    </el-form-item>-->
<!--    <el-form-item label="职位">-->
<!--      <el-input v-model="searchParams.position" clearable placeholder="请输入职位" />-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-button type="primary" @click="search"> 搜索 </el-button>-->
<!--      <el-button type="warning" @click="reset"> 重置 </el-button>-->
<!--    </el-form-item>-->
<!--  </el-form>-->
<!--</template>-->

<!--<script lang="ts" setup>-->
<!--import { ref } from "vue";-->
<!--import { SearchParams } from "@/components/ProTable/type";-->
<!--import { searchEmpAPI } from "@/api/empManagement";-->
<!--/* 搜索参数 */-->
<!--const searchParams = ref<SearchParams>({-->
<!--  pageNum: 1,-->
<!--  pageSize: 20,-->
<!--  empName: "",-->
<!--  deptId: "",-->
<!--  position: ""-->
<!--});-->
<!--/* 搜索功能 */-->
<!--const search = async () => {-->
<!--  const res = await searchEmpAPI(searchParams.value);-->
<!--  if (res.code === 200) {-->
<!--    props.tableData.value = res.data.content;-->
<!--    props.tableTotal.value = res.data.totalSize;-->
<!--  }-->
<!--};-->
<!--/* 清空搜索参数 */-->
<!--const clearSearchParams = () => {-->
<!--  searchParams.value = {-->
<!--    pageNum: 1,-->
<!--    pageSize: 20,-->
<!--    empName: "",-->
<!--    deptId: "",-->
<!--    position: ""-->
<!--  };-->
<!--};-->

<!--/* 重置 */-->
<!--const reset = () => {-->
<!--  /* 清空搜索参数 */-->
<!--  clearSearchParams();-->
<!--  /* 初始table */-->
<!--  // getTableData();-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--:deep(.el-form) {-->
<!--  .el-form-item {-->
<!--    margin-bottom: 0 !important;-->
<!--  }-->
<!--  .el-input {-->
<!--    max-width: 253px;-->
<!--    width: 253px;-->
<!--  }-->
<!--}-->
<!--</style>-->
