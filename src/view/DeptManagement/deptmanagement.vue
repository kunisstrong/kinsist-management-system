<template>
    <div class="dept-container">
        <el-row class="dept-search" :gutter="20">
            <el-col :span="10">
                <span>部门名称</span>
                <el-input v-model="searchParams.name" clearable />
            </el-col>
            <el-col :span="10">
                <span>负责人</span>
                <el-input v-model="searchParams.manager" clearable />
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="search">搜索</el-button>
                <el-button type="warning" @click="reset">重置</el-button>
            </el-col>
        </el-row>
        <el-row class="dept-operation" justify="start">
            <el-button type="primary" @click="openAddDialog">新增</el-button>
            <el-button type="success">修改</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="warning">导入</el-button>
            <el-button>导出</el-button>
        </el-row>
        <div class="table">
            <el-table :data="tableData" style="width: 100%" border center stripe>
                <el-table-column type="selection" width="55" />
                <el-table-column label="序号" type="index" align="center" width="100" />
                <el-table-column prop="deptName" label="部门名称" align="center" />
                <el-table-column prop="manager" label="负责人" align="center" />
                <el-table-column prop="allNum" label="部门人数" align="center" />
                <el-table-column prop="remark" label="备注" align="center" />
                <el-table-column label="操作" align="center">
                    <template #default>
                        <el-button link type="primary" size="small" @click="singleUpdate">修改</el-button>
                        <el-button link type="primary" size="small" @click="singleDel">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page-box">
            <el-pagination background layout="prev, pager, next" :total="tableTotal" />
        </div>
        <el-dialog v-model="addDialogFormVisible" title="新增部门信息">
            <el-form :model="addFormParams" label-position="top">
                <el-form-item label="请输入部门名称" :label-width="formLabelWidth">
                    <el-input v-model="addFormParams.deptName" autocomplete="true" clearable />
                </el-form-item>
                <el-form-item label="请输入负责人" :label-width="formLabelWidth">
                    <el-input v-model="addFormParams.manager" autocomplete="off" />
                </el-form-item>
                <el-form-item label="请输入部门人数" :label-width="formLabelWidth">
                    <el-input v-model="addFormParams.allNum" autocomplete="off" />
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                    <el-input v-model="addFormParams.remark" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addDialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="addDept">
                        确定
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { AddFormParams, SearchParams, TableData, TableParams } from './type'
import { addDeptAPI, allDeptAPI, searchAPI } from '@/api/deptManagement'
/* 打开新增对话框 */
const openAddDialog = () => {
    addDialogFormVisible.value = true
}
/* 对话框内容宽度 */
const formLabelWidth = '140px'
/* 新增对话框是否可见 */
const addDialogFormVisible = ref(false)
/* 新增参数 */
const addFormParams = ref<AddFormParams>({
    deptId: '',
    deptName: '',
    manager: '',
    allNum: 1,
    remark: ''
})
/* 新增功能 */
const addDept = async () => {
    const result = await addDeptAPI(addFormParams.value)
    console.log(result);
    if (result.flag) {
        addDialogFormVisible.value = false

        /* 重新获取table列表 */
        getTableData()
        /* 清空新增参数 */
        clearAddParams()
    }

}
/* 清空新增参数 */
const clearAddParams = () => {
    addFormParams.value = {
        deptId: '',
        deptName: '',
        manager: '',
        allNum: 1,
        remark: ''
    }
}
/* 搜索参数 */
const searchParams = ref<SearchParams>({
    currentPage: 1,
    pageSize: 10,
    name: '',
    manager: ''
})
/* 搜索功能 */
const search = async () => {
    console.log("searchParams.value", searchParams.value)
    const result = await searchAPI(searchParams.value)
    if (result.flag) {
        tableData.value = result.data.records
        tableTotal.value = result.data.total
    }
}
/* 清空搜索参数 */
const clearSearchParams = () => {
    searchParams.value = {
        currentPage: 1,
        pageSize: 10,
        name: '',
        manager: ''
    }
}
/* 重置 */
const reset = () => {
    /* 初始table */
    getTableData()
    /* 清空参数 */
    clearSearchParams()
}
/* 修改功能 */
const singleUpdate = () => {
    console.log("单个修改")
}
/* 单个删除 */
const singleDel = () => {
    console.log("单个删除")
}
const tableParams = ref<TableParams>({
    pageSize: 10,
    currentPage: 1
})
/* 获取table列表 */
const getTableData = async () => {
    const result = await allDeptAPI(tableParams.value)
    if (result.flag) {
        tableData.value = result.data.records
        tableTotal.value = result.data.total
    }
}
/* table数据 */
const tableData = ref<TableData[]>()
const tableTotal = ref(0)
onMounted(() => {
    /* 获取tableData */
    getTableData()
})
</script>

<style lang="scss" scoped>
.dept-container {
    padding: 10px;
    height: calc(100% - 55px);
    background-color: #eeeeee;

    .dept-search {
        margin: 0 !important;
        padding: 10px;
        background-color: #fff;
        border-radius: 10px;

        .el-col {
            display: flex;
            align-items: center;


            span {
                white-space: nowrap;
                margin-right: 10px;
            }
        }
    }

    .dept-operation {
        padding: 10px 0;
    }

    .table {
        border-radius: 10px;
        overflow: hidden;
    }

    .page-box {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>