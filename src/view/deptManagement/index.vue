<template>
  <div class="dept-container">
    <el-row class="dept-search" :gutter="20">
      <el-col :span="5">
        <span>部门名称</span>
        <el-input v-model="searchParams.deptName" clearable placeholder="请输入部门名称"/>
      </el-col>
      <el-col :span="5">
        <span>负责人</span>
        <el-input v-model="searchParams.manager" clearable placeholder="请输入负责人"/>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="warning" @click="reset">重置</el-button>
      </el-col>
    </el-row>
    <el-row class="dept-operation" justify="start">
      <el-button type="primary" @click="openAddDialog">新增</el-button>
      <el-button type="danger" @click="openDelDeptMsgBox" :disabled="delIds.length === 0">删除</el-button>
      <!-- <el-button type="warning">导入</el-button>  -->
      <el-button type="warning" @click="exportExcel" :disabled="exportData.length === 0">导出</el-button>
    </el-row>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border center stripe @selection-change="handleSelection">
        <el-table-column type="selection" width="55"/>
        <el-table-column label="序号" type="index" align="center" width="100"/>
        <el-table-column prop="deptName" label="部门名称" align="center"/>
        <el-table-column prop="manager" label="负责人" align="center"/>
        <el-table-column prop="allNum" label="部门人数" align="center"/>
        <el-table-column prop="remark" label="备注" align="center"/>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="openUpdateDialog(scope.row)">修改</el-button>
            <el-button link type="primary" size="small" @click="singleDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
      <el-pagination
          background
          v-model:page-size="searchParams.pageSize"
          v-model:current-page="searchParams.pageNum"
          :page-sizes="[5, 10, 20, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />

    </div>
    <el-dialog v-model="addDialogFormVisible" title="新增部门信息">
      <el-form :model="addFormParams" label-position="top" :rules="addRules">
        <el-form-item label="请输入部门名称" :label-width="formLabelWidth" prop="deptName">
          <el-input v-model="addFormParams.deptName" autocomplete="true" clearable/>
        </el-form-item>
        <el-form-item label="请输入负责人" :label-width="formLabelWidth" prop="manager">
          <el-input v-model="addFormParams.manager" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="请输入部门人数" :label-width="formLabelWidth" prop="allNum">
          <el-input v-model="addFormParams.allNum" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth" prop="remark">
          <el-input v-model="addFormParams.remark" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addDialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="addDept" :disabled="addDialogBtnDisabled">确定</el-button>
                </span>
      </template>
    </el-dialog>
    <el-dialog v-model="updateDialogFormVisible" title="修改部门信息">
      <el-form :model="updateParams" label-position="top" :rules="updateRules">
        <el-form-item label="部门名称" :label-width="formLabelWidth" prop="deptName">
          <el-input v-model="updateParams.deptName" autocomplete="true" clearable placeholder="请输入部门名称"/>
        </el-form-item>
        <el-form-item label="负责人" :label-width="formLabelWidth" prop="manager">
          <el-input v-model="updateParams.manager" autocomplete="off" placeholder="请输入负责人"/>
        </el-form-item>
        <el-form-item label="部门人数" :label-width="formLabelWidth" prop="allNum">
          <el-input v-model="updateParams.allNum" autocomplete="off" placeholder="请输入部门人数"/>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="updateParams.remark" autocomplete="off" placeholder="请输入备注信息"/>
        </el-form-item>
      </el-form>
      <template #footer>
                <span class="dialog-footer">
                    <el-button @click="updateDialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="updateDept" :disabled="updateDialogBtnDisabled">确定</el-button>
                </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref, reactive, computed} from 'vue';
import {AddAndUpdateFormParams, SearchParams, TableData} from './type'
import {addDeptAPI, allDeptAPI, removeDeptAPI, searchAPI, updateDeptAPI} from '@/api/deptManagement'
import {ElMessage, ElMessageBox, FormRules} from "element-plus"
import * as XLSX from 'xlsx'

/* 导出 */
let exportData: TableData[] = reactive([])
const exportExcel = () => {
  // 将表头key转换成中文
  const list = []; // 定义list数组
  const obj: any = {};
  for (let i = 0; i < exportData.length; i++) {
    obj.value = {};
    // 将对应的英文key转化为自己想要的中文key
    for (let key in exportData[i]) {
      if (key == 'id') {
        obj.value['序号'] = i + 1;
      } else if (key == 'deptName') {
        obj.value['部门名称'] = exportData[i][key];
      } else if (key == 'manager') {
        obj.value['负责人'] = exportData[i][key];
      } else if (key == 'allNum') {
        obj.value['部门人数'] = exportData[i][key];
      } else if (key == 'remark') {
        obj.value['备注'] = exportData[i][key];
      }
    }
    list.push(obj.value);
  }
  // 创建工作表
  const data = XLSX.utils.json_to_sheet(list)
  // 创建工作簿
  const wb = XLSX.utils.book_new()
  // 将工作表放入工作簿中
  XLSX.utils.book_append_sheet(wb, data, 'data')
  // 生成文件并下载
  XLSX.writeFile(wb, '部门信息.xlsx')
}
/* table中的删除 */
const singleDel = (row: TableData) => {
  delIds.value.push(row.deptId)
  openDelDeptMsgBox()
}
/* 删除dept消息盒子 */
const openDelDeptMsgBox = () => {
  ElMessageBox.confirm(
      `确定要删除这些部门`,
      '系统提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }
  ).then(() => {
    /* 调用删除API */
    delDept()
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消删除'
    })
    delIds.value.length = 0
  })
}
/* 调用删除deptAPI */
const delDept = async () => {
  const res = await removeDeptAPI(delIds.value)
  if (res.code === 200) {
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    /* 清空删除参数 */
    delIds.value.length = 0
    /* 初始化table列表*/
    await getTableData()
  }
}
/* 删除id */
const delIds = ref<number[]>([])
/*  table多选 */
const handleSelection = (val: TableData[]) => {
  /* 添加删除id */
  const tempIds: number[] = []
  val.forEach((item: TableData) => {
    tempIds.push(item.deptId)
  })
  delIds.value = tempIds

  /* 导出 */
  exportData = val
}
/* 打开新增对话框 */
const openAddDialog = () => {
  addDialogFormVisible.value = true
}
/* 对话框内容宽度 */
const formLabelWidth = '140px'
/* 新增对话框是否可见 */
const addDialogFormVisible = ref(false)
/* 新增参数 */
const addFormParams = ref<AddAndUpdateFormParams>({
  deptName: '',
  manager: '',
  allNum: '',
  remark: ''
})
/* 调用新增API */
const addDept = async () => {
  const res = await addDeptAPI(addFormParams.value)
  console.log(res);
  if (res.code === 200) {
    ElMessage({
      message: '新增成功',
      type: 'success',
    })
    addDialogFormVisible.value = false
    /* 重新获取table列表 */
    await getTableData()
    /* 清空新增参数 */
    clearAddParams()
  }
}
/* 新增form校验 */
const addRules = reactive<FormRules>({
  deptName: [{required: true, message: '请输入部门名称', trigger: 'blur'}],
  manager: [{required: true, message: '请输入负责人', trigger: 'blur'}],
  allNum: [{required: true, message: '请输入部门人数', trigger: 'blur'}]
})
/* 新增对话框中确定按钮 */
const addDialogBtnDisabled = computed(() => {
  const res: boolean = addFormParams.value.deptName !== '' && addFormParams.value.manager !== '' && addFormParams.value.allNum !== ''
  return !res
})
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
  pageNum: 1,
  pageSize: 10,
  deptName: '',
  manager: ''
})
/* 搜索功能 */
const search = async () => {
  console.log("searchParams.value", searchParams.value)
  const res = await searchAPI(searchParams.value)
  if (res.code === 200) {
    tableData.value = res.data.content
    tableTotal.value = res.data.totalSize
  }
}
/* 清空搜索参数 */
const clearSearchParams = () => {
  searchParams.value = {
    pageNum: 1,
    pageSize: 10,
    deptName: '',
    manager: ''
  }
}

// 重置
const reset = () => {
  /* 清空参数 */
  clearSearchParams()
  /* 初始table */
  getTableData()
}

/* 修改参数 */
const updateParams = ref<AddAndUpdateFormParams>({
  deptId: '',
  deptName: '',
  manager: '',
  allNum: 1,
  remark: ''
})
const updateDialogFormVisible = ref(false)
/* 打开修改对话框 */
const openUpdateDialog = (row: TableData) => {
  updateParams.value.deptId = row.deptId
  updateParams.value.deptName = row.deptName
  updateParams.value.manager = row.manager
  updateParams.value.allNum = row.allNum
  updateParams.value.remark = row.remark
  /* 打开修改对话框 */
  updateDialogFormVisible.value = true
}
/* 调用修改API*/
const updateDept = async () => {
  const res = await updateDeptAPI(updateParams.value)
  if (res.code === 200) {
    ElMessage({
      message: '修改成功',
      type: 'success',
    })
    updateDialogFormVisible.value = false
    await getTableData()
  }
}
/* 修改form校验 */
const updateRules = reactive<FormRules>({
  deptName: [{required: true, message: '请输入部门名称', trigger: 'blur'}],
  manager: [{required: true, message: '请输入负责人', trigger: 'blur'}],
  allNum: [{required: true, message: '请输入部门人数', trigger: 'blur'}]
})
/* 修改对话框中确定按钮 */
const updateDialogBtnDisabled = computed(() => {
  const res: boolean = updateParams.value.deptName !== '' && updateParams.value.manager !== '' && updateParams.value.allNum !== ''
  return !res
})

/* 获取table列表 */
const getTableData = async () => {
  const res = await allDeptAPI(searchParams.value)
  if (res.code === 200) {
    tableData.value = res.data.content
    tableTotal.value = res.data.totalSize
  }
}

/* 改变pageSize */
const handleSizeChange = () => {
  getTableData()
}
/* 改变currentPage */
const handleCurrentChange = () => {
  getTableData()
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
