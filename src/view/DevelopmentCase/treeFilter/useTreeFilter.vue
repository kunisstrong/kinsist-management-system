<template>
  <div class="tree-table">
    <TreeFilter :tree-data="TreeFilterData" :title="treeTableTitle" :handle-node-click="handleNodeClick" />
    <div class="table-box">
      <div class="pro-table">
        <el-form :inline="true" :model="searchParams" class="demo-form-inline dept-search">
          <el-form-item label="员工姓名">
            <el-input v-model="searchParams.empName" clearable placeholder="请输入员工姓名" @change="search" />
          </el-form-item>
          <el-form-item label="所属部门">
            <el-select
              v-model="searchParams.deptId"
              class="m-2"
              placeholder="请选择所属部门"
              size="default"
              clearable
              @change="search"
            >
              <el-option v-for="item in deptList" :key="item.deptId" :label="item.deptName" :value="item.deptId" />
            </el-select>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="searchParams.position" clearable placeholder="请输入职位" @change="search" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search"> 搜索 </el-button>
            <el-button type="warning" @click="reset"> 重置 </el-button>
          </el-form-item>
        </el-form>
        <el-row class="dept-operation" justify="start">
          <el-button type="primary" @click="openAddDialog"> 新增 </el-button>
          <el-button type="danger" :disabled="delIds.length === 0" @click="openDelDeptMsgBox"> 删除 </el-button>
          <el-button type="warning" :disabled="exportData.length === 0" @click="exportExcel"> 导出 </el-button>
        </el-row>
        <div class="table">
          <el-table
            :data="tableData"
            style="width: 100%"
            border
            center
            stripe
            max-height="620"
            @selection-change="handleSelection"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="序号" type="index" align="center" width="100" />
            <el-table-column prop="empName" label="员工姓名" align="center" />
            <el-table-column prop="age" label="年龄" align="center" />
            <el-table-column prop="salary" label="薪水(元)" align="center" />
            <el-table-column prop="position" label="职位" align="center" />
            <el-table-column prop="deptName" label="所在部门" align="center" />
            <el-table-column prop="sex" label="员工性别" align="center" />
            <el-table-column prop="entryDate" label="入职时间" align="center" dataformatas="yyyy-MM-dd" width="300" />
            <el-table-column label="操作" align="center">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="openUpdateDialog(scope.row)"> 修改 </el-button>
                <el-button link type="primary" size="small" @click="singleDel(scope.row)"> 删除 </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-box">
          <!--分页-->
          <Pagination :table-total="tableTotal" :search-params="searchParams" :get-table-data="getTableData" />
        </div>
        <el-dialog v-model="addDialogFormVisible" title="新增员工信息">
          <el-form :model="addFormParams" label-position="top" :rules="addRules">
            <el-form-item label="员工姓名" :label-width="formLabelWidth" prop="empName">
              <el-input v-model="addFormParams.empName" autocomplete="true" clearable placeholder="请输入员工姓名" />
            </el-form-item>
            <el-form-item label="职位" :label-width="formLabelWidth" prop="position">
              <el-input v-model="addFormParams.position" autocomplete="off" placeholder="请输入职位" />
            </el-form-item>
            <el-form-item label="薪水" :label-width="formLabelWidth" prop="salary">
              <el-input v-model="addFormParams.salary" autocomplete="off" placeholder="请输入薪水" />
            </el-form-item>
            <el-form-item label="所属部门" :label-width="formLabelWidth" prop="deptId">
              <el-select v-model="addFormParams.deptId" class="m-2" placeholder="请选择所属部门" size="default" clearable>
                <el-option v-for="item in deptList" :key="item.deptId" :label="item.deptName" :value="item.deptId" />
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
              <el-input v-model="addFormParams.age" autocomplete="off" placeholder="请输入年龄" />
            </el-form-item>
            <el-form-item label="入职时间" :label-width="formLabelWidth" prop="entryDate">
              <el-date-picker v-model="addFormParams.entryDate" type="date" placeholder="请选择入职时间" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select v-model="addFormParams.sex" class="m-2" placeholder="请选择性别" size="default" clearable>
                <el-option key="1" label="男性" value="男" />
                <el-option key="2" label="女性" value="女" />
              </el-select>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="addDialogFormVisible = false">取消</el-button>
              <el-button type="primary" :disabled="addDialogBtnDisabled" @click="addDept">确定</el-button>
            </span>
          </template>
        </el-dialog>
        <el-dialog v-model="updateDialogFormVisible" title="修改部门信息">
          <el-form :model="updateParams" label-position="top" :rules="updateRules">
            <el-form-item label="员工姓名" :label-width="formLabelWidth" prop="empName">
              <el-input v-model="updateParams.empName" autocomplete="true" clearable placeholder="请输入员工姓名" />
            </el-form-item>
            <el-form-item label="职位" :label-width="formLabelWidth" prop="position">
              <el-input v-model="updateParams.position" autocomplete="off" placeholder="请输入职位" />
            </el-form-item>
            <el-form-item label="薪水" :label-width="formLabelWidth" prop="salary">
              <el-input v-model="updateParams.salary" autocomplete="off" placeholder="请输入薪水" />
            </el-form-item>
            <el-form-item label="所属部门" :label-width="formLabelWidth" prop="deptId">
              <el-select v-model="updateParams.deptId" class="m-2" placeholder="请选择所属部门" size="default" clearable>
                <el-option v-for="item in deptList" :key="item.deptId" :label="item.deptName" :value="item.deptId" />
              </el-select>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
              <el-input v-model="updateParams.age" autocomplete="off" placeholder="请输入年龄" />
            </el-form-item>
            <el-form-item label="入职时间" :label-width="formLabelWidth" prop="entryDate">
              <el-date-picker v-model="updateParams.entryDate" type="date" placeholder="请选择入职时间" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select v-model="updateParams.sex" class="m-2" placeholder="请选择性别" size="default" clearable>
                <el-option key="1" label="男性" value="男" />
                <el-option key="2" label="女性" value="女" />
              </el-select>
            </el-form-item>
          </el-form>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="updateDialogFormVisible = false">取消</el-button>
              <el-button type="primary" :disabled="updateDialogBtnDisabled" @click="updateDept">确定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TreeFilter from "@/components/TreeFilter/TreeFilter.vue";
import { TreeFilterType } from "@/types/treeFilter";
import { onMounted, ref, reactive, computed } from "vue";
import { AddAndUpdateFormParams, DeptItem, SearchParams, TableData } from "./type";
import { ElMessage, ElMessageBox, FormRules } from "element-plus";
import * as XLSX from "xlsx";
import { allEmpAPI, delEmpAPI, getDeptListAPI, saveEmpAPI, searchEmpAPI, updateEmpAPI } from "@/api/empManagement";
import Pagination from "@/components/Pagination/Pagination.vue";
/* 导出 */
let exportData: TableData[] = reactive([]);
const exportExcel = () => {
  // 将表头key转换成中文
  const list = []; // 定义list数组
  const obj: any = {};
  for (let i = 0; i < exportData.length; i++) {
    obj.value = {};
    // 将对应的英文key转化为自己想要的中文key
    for (const key in exportData[i]) {
      if (key === "empId") {
        obj.value["序号"] = i + 1;
      } else if (key === "empName") {
        obj.value["员工姓名"] = exportData[i][key];
      } else if (key === "age") {
        obj.value["年龄"] = exportData[i][key];
      } else if (key === "salary") {
        obj.value["薪水(元)"] = exportData[i][key];
      } else if (key === "position") {
        obj.value["职位"] = exportData[i][key];
      } else if (key === "deptName") {
        obj.value["所在部门"] = exportData[i][key];
      } else if (key === "sex") {
        obj.value["性别"] = exportData[i][key];
      } else if (key === "entryDate") {
        obj.value["入职时间"] = exportData[i][key];
      }
    }
    list.push(obj.value);
  }
  // 创建工作表
  const data = XLSX.utils.json_to_sheet(list);
  // 创建工作簿
  const wb = XLSX.utils.book_new();
  // 将工作表放入工作簿中
  XLSX.utils.book_append_sheet(wb, data, "data");
  // 生成文件并下载
  XLSX.writeFile(wb, "部门信息.xlsx");
};
/* table中的删除 */
const singleDel = (row: TableData) => {
  delIds.value.push(row.empId);
  openDelDeptMsgBox();
};
/* 删除dept消息盒子 */
const openDelDeptMsgBox = () => {
  ElMessageBox.confirm("确定要删除这些部门", "系统提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      /* 调用删除API */
      delDept();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消删除"
      });
      delIds.value.length = 0;
    });
};
/* 调用删除deptAPI */
const delDept = async () => {
  const res = await delEmpAPI(delIds.value);
  if (res.code === 200) {
    ElMessage({
      type: "success",
      message: "删除成功"
    });
    /* 清空删除参数 */
    delIds.value.length = 0;
    /* 初始化table列表 */
    await getTableData();
  }
};
/* 删除id */
const delIds = ref<number[]>([]);
/*  table多选 */
const handleSelection = (val: TableData[]) => {
  /* 添加删除id */
  const tempIds: number[] = [];
  val.forEach((item: TableData) => {
    tempIds.push(item.empId);
  });
  delIds.value = tempIds;

  /* 导出 */
  exportData = val;
};

/* 打开新增对话框 */
const openAddDialog = () => {
  addDialogFormVisible.value = true;
};
/* 对话框内容宽度 */
const formLabelWidth = "140px";
/* 新增对话框是否可见 */
const addDialogFormVisible = ref(false);
/* 新增参数 */
const addFormParams = ref<AddAndUpdateFormParams>({
  age: 18,
  empId: "",
  empName: "",
  sex: "",
  entryDate: "",
  position: "",
  salary: "",
  deptId: ""
});
/* 调用新增API */
const addDept = async () => {
  const res = await saveEmpAPI(addFormParams.value);
  if (res.code === 200) {
    ElMessage({
      message: "新增成功",
      type: "success"
    });
    addDialogFormVisible.value = false;
    /* 重新获取table列表 */
    await getTableData();
    /* 清空新增参数 */
    clearAddParams();
  }
};
/* 新增form校验 */
const addRules = reactive<FormRules>({
  empName: [{ required: true, message: "员工姓名是必填项", trigger: "blur" }],
  entryDate: [{ required: true, message: "入职时间是必填项", trigger: "blur" }],
  position: [{ required: true, message: "职位是必填项", trigger: "blur" }],
  salary: [{ required: true, message: "薪水是必填项", trigger: "blur" }],
  deptId: [{ required: true, message: "所属部门是必填项", trigger: "blur" }]
});
/* 新增对话框中确定按钮 */
const addDialogBtnDisabled = computed(() => {
  const res: boolean =
    addFormParams.value.empName !== "" &&
    addFormParams.value.entryDate !== "" &&
    addFormParams.value.position !== "" &&
    addFormParams.value.salary !== "" &&
    addFormParams.value.deptId !== "";
  return !res;
});
/* 清空新增参数 */
const clearAddParams = () => {
  addFormParams.value = {
    age: 18,
    empId: "",
    empName: "",
    sex: "",
    entryDate: "",
    position: "",
    salary: 20000,
    deptId: ""
  };
};

/* 搜索参数 */
const searchParams = ref<SearchParams>({
  pageNum: 1,
  pageSize: 20,
  empName: "",
  deptId: "",
  position: ""
});
/* 搜索功能 */
const search = async () => {
  const res = await searchEmpAPI(searchParams.value);
  if (res.code === 200) {
    tableData.value = res.data.content;
    tableTotal.value = res.data.totalSize;
  }
};
/* 清空搜索参数 */
const clearSearchParams = () => {
  searchParams.value = {
    pageNum: 1,
    pageSize: 20,
    empName: "",
    deptId: "",
    position: ""
  };
};

/* 重置 */
const reset = () => {
  /* 清空搜索参数 */
  clearSearchParams();
  /* 初始table */
  getTableData();
};

/* 修改参数 */
const updateParams = ref<AddAndUpdateFormParams>({
  age: 18,
  empId: "",
  empName: "",
  sex: "",
  entryDate: "",
  position: "",
  salary: "",
  deptId: ""
});
const updateDialogFormVisible = ref(false);
/* 打开修改对话框 */
const openUpdateDialog = (row: TableData) => {
  updateParams.value.empId = row.empId;
  updateParams.value.empName = row.empName;
  updateParams.value.age = row.age;
  updateParams.value.sex = row.sex;
  updateParams.value.entryDate = row.entryDate;
  updateParams.value.position = row.position;
  updateParams.value.salary = row.salary;
  updateParams.value.deptId = row.deptId;
  /* 打开修改对话框 */
  updateDialogFormVisible.value = true;
};
/* 调用修改API */
const updateDept = async () => {
  const res = await updateEmpAPI(updateParams.value);
  if (res.code === 200) {
    ElMessage({
      message: "修改成功",
      type: "success"
    });
    updateDialogFormVisible.value = false;
    await getTableData();
  }
};
/* 修改form校验 */
const updateRules = reactive<FormRules>({
  empName: [{ required: true, message: "员工姓名是必填项", trigger: "blur" }],
  entryDate: [{ required: true, message: "入职时间是必填项", trigger: "blur" }],
  position: [{ required: true, message: "职位是必填项", trigger: "blur" }],
  salary: [{ required: true, message: "薪水是必填项", trigger: "blur" }],
  deptId: [{ required: true, message: "所属部门是必填项", trigger: "blur" }]
});
/* 修改对话框中确定按钮 */
const updateDialogBtnDisabled = computed(() => {
  const res: boolean =
    updateParams.value.empId !== "" &&
    updateParams.value.empName !== "" &&
    updateParams.value.entryDate !== "" &&
    updateParams.value.position !== "" &&
    updateParams.value.salary !== "" &&
    updateParams.value.deptId !== "";
  return !res;
});

/* 初始化table列表 */
const getTableData = async () => {
  const res = await allEmpAPI(searchParams.value);
  if (res.code === 200) {
    tableData.value = res.data.content;
    tableTotal.value = res.data.totalSize;
  }
};
/* table数据 */
const tableData = ref<TableData[]>();
const tableTotal = ref(0);
/* 部门列表 */
const deptList = ref<DeptItem[]>();
/* 初始化部门列表 */
const getDeptList = async () => {
  const res = await getDeptListAPI();
  if (res.code === 200) {
    deptList.value = res.data;
  }
};

onMounted(() => {
  /* 初始化tableData */
  getTableData();
  /* 初始化部门列表 */
  getDeptList();
});

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

<style lang="scss" scoped>
:deep(.el-form) {
  .el-form-item {
    margin-bottom: 0 !important;
  }
  .el-input {
    max-width: 253px;
    width: 253px;
  }
}
.pro-table {
  box-sizing: border-box;
  height: calc(100% - 10px);
  //padding: 18px;
  //background-color: #ffffff !important;
  margin-right: 10px;
  border-radius: 8px;
  .dept-search {
    padding: 10px;
    margin: 0 !important;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .dept-operation {
    padding: 10px 0;
  }
  .table {
    overflow: hidden;
    border-radius: 10px;
    min-height: 620px;
  }
  .page-box {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
}
</style>
