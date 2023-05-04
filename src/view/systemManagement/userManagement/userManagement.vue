<template>
  <div class="single-table">
    <el-row class="dept-search" :gutter="20">
      <el-col :span="5">
        <span>用户姓名</span>
        <el-input v-model="searchParams.userName" clearable placeholder="请输入用户姓名" @change="search" autofocus />
      </el-col>
      <el-col :span="5">
        <span>家庭地址</span>
        <el-input v-model="searchParams.address" clearable placeholder="请输入家庭地址" @change="search" />
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="search"> 搜索 </el-button>
        <el-button type="warning" @click="reset"> 重置 </el-button>
      </el-col>
    </el-row>
    <el-row class="dept-operation" justify="start">
      <el-button type="primary" @click="openAddDialog"> 新增 </el-button>
      <el-button type="danger" :disabled="delIds.length === 0" @click="openDelUserMsgBox"> 删除 </el-button>
      <el-button type="warning" :disabled="exportData.length === 0" @click="exportExcel"> 导出 </el-button>
    </el-row>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" border center stripe max-height="610" @selection-change="handleSelection">
        <el-table-column type="selection" width="55" />
        <el-table-column label="序号" type="index" align="center" width="100" />
        <el-table-column prop="userName" label="用户姓名" align="center" />
        <el-table-column prop="age" label="年龄" align="center" />
        <el-table-column prop="sex" label="性别" align="center" />
        <el-table-column prop="status" label="状态" align="center">
          <template #default="scope">
            <el-switch v-model="scope.row.status" @change="changeStatus(scope.row)" />
          </template>
        </el-table-column>
        <el-table-column prop="idCard" label="身份证" align="center" width="200" />
        <el-table-column prop="email" label="邮箱" align="center" width="200" />
        <el-table-column prop="address" label="居住地址" align="center" width="150" />
        <el-table-column prop="sex" label="员工性别" align="center" />
        <el-table-column prop="createTime" label="创建时间" align="center" dataformatas="yyyy-MM-dd" width="300" />
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="openUpdateDialog(scope.row)"> 修改 </el-button>
            <el-button link type="primary" size="small" @click="singleDel(scope.row)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
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
    </div>
    <el-dialog v-model="addDialogFormVisible" title="新增用户信息">
      <el-form :model="addFormParams" label-position="top" :rules="addRules">
        <el-form-item label="用户姓名" :label-width="formLabelWidth" prop="userName">
          <el-input v-model="addFormParams.userName" autocomplete="true" clearable placeholder="请输入用户姓名" />
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="addFormParams.age" autocomplete="off" placeholder="请输入年龄" />
        </el-form-item>
        <el-form-item label="身份证" :label-width="formLabelWidth" prop="identityCard">
          <el-input v-model="addFormParams.idCard" autocomplete="off" placeholder="请输入身份证" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="addFormParams.email" autocomplete="off" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="居住地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="addFormParams.address" autocomplete="off" placeholder="请输入居住地址" />
        </el-form-item>
        <el-form-item label="创建时间" :label-width="formLabelWidth" prop="createTime">
          <el-date-picker v-model="addFormParams.createTime" type="date" placeholder="请选择入职时间" />
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="addFormParams.sex" class="m-2" placeholder="请选择性别" size="default" clearable>
            <el-option key="1" label="男性" value="男" />
            <el-option key="2" label="女性" value="女" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addDialogFormVisible = false">取消</el-button>
          <el-button type="primary" :disabled="addDialogBtnDisabled" @click="addUser">确定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-drawer v-model="updateDialogFormVisible" size="450">
      <template #header>
        <p>编辑用户</p>
      </template>
      <template #default>
        <el-form :model="updateParams" label-position="top" :rules="updateRules">
          <el-form-item label="用户姓名" :label-width="formLabelWidth" prop="userName">
            <el-input v-model="updateParams.userName" autocomplete="true" clearable placeholder="请输入用户姓名" />
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
            <el-input v-model="updateParams.age" autocomplete="off" placeholder="请输入年龄" />
          </el-form-item>
          <el-form-item label="身份证" :label-width="formLabelWidth" prop="identityCard">
            <el-input v-model="updateParams.idCard" autocomplete="off" placeholder="请输入身份证" />
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input v-model="updateParams.email" autocomplete="off" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
            <el-radio-group v-model="updateParams.status" class="ml-4">
              <el-radio :label="false" size="large">禁用</el-radio>
              <el-radio :label="true" size="large">启动</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="居住地址" :label-width="formLabelWidth" prop="address">
            <el-input v-model="updateParams.address" autocomplete="off" placeholder="请输入居住地址" />
          </el-form-item>
          <el-form-item label="创建时间" :label-width="formLabelWidth" prop="createTime">
            <el-date-picker v-model="updateParams.createTime" type="date" placeholder="请选择入职时间" />
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
            <el-select v-model="updateParams.sex" class="m-2" placeholder="请选择性别" size="default" clearable>
              <el-option key="1" label="男性" value="男" />
              <el-option key="2" label="女性" value="女" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="updateDialogFormVisible = false">取消</el-button>
          <el-button type="primary" :disabled="updateDialogBtnDisabled" @click="updateUser">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed } from "vue";
import { AddAndUpdateFormParams, SearchParams, TableData } from "./type";
import { ElMessage, ElMessageBox, FormRules } from "element-plus";
import * as XLSX from "xlsx";
import { allUserAPI, searchUserAPI, updateUserAPI, saveUserAPI, delUserAPI } from "@/api/userManagement";

/* 改变用户状态 */
const changeStatus = async (row: TableData) => {
  updateParams.value.userId = row.userId;
  updateParams.value.age = row.age;
  updateParams.value.userName = row.userName;
  updateParams.value.sex = row.sex;
  updateParams.value.idCard = row.idCard;
  updateParams.value.email = row.email;
  updateParams.value.address = row.address;
  updateParams.value.createTime = row.createTime;
  updateParams.value.status = row.status === true ? 1 : 0;
  console.log("updateParams.value", updateParams.value);

  const res = await updateUserAPI(updateParams.value);
  if (res.code === 200) {
    ElMessage({
      message: "状态修改成功",
      type: "success"
    });
  } else {
    ElMessage({
      message: "状态修改失败",
      type: "error"
    });
  }
  await getTableData();
};

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
      if (key === "userId") {
        obj.value["序号"] = i + 1;
      } else if (key === "userName") {
        obj.value["用户姓名"] = exportData[i][key];
      } else if (key === "age") {
        obj.value["年龄"] = exportData[i][key];
      } else if (key === "status") {
        obj.value["状态"] = exportData[i][key] === 0 ? "离职" : "在职";
      } else if (key === "idCard") {
        obj.value["身份证"] = exportData[i][key];
      } else if (key === "email") {
        obj.value["邮箱"] = exportData[i][key];
      } else if (key === "address") {
        obj.value["居住地址"] = exportData[i][key];
      } else if (key === "sex") {
        obj.value["性别"] = exportData[i][key];
      } else if (key === "createTime") {
        obj.value["创建时间"] = exportData[i][key];
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
  XLSX.writeFile(wb, "用户信息.xlsx");
};
/* table中的删除 */
const singleDel = (row: TableData) => {
  delIds.value.push(row.userId as number);
  openDelUserMsgBox();
};
/* 删除dept消息盒子 */
const openDelUserMsgBox = () => {
  ElMessageBox.confirm("确定要删除这些部门", "系统提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      /* 调用删除API */
      delUser();
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
const delUser = async () => {
  const res = await delUserAPI(delIds.value);
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
  const tempIds: Array<number> = [];
  val.forEach((item: TableData) => {
    tempIds.push(item.userId as number);
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
  userId: 0,
  age: 0,
  userName: "",
  sex: "",
  idCard: "",
  email: "",
  address: "",
  status: 1,
  createTime: ""
});
/* 调用新增API */
const addUser = async () => {
  const res = await saveUserAPI(addFormParams.value);
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
  userName: [{ required: true, message: "员工姓名是必填项", trigger: "blur" }],
  age: [{ required: true, message: "年龄是必填项", trigger: "blur" }],
  sex: [{ required: true, message: "性别是必填项", trigger: "blur" }],
  identityCard: [{ required: true, message: "身份证是必填项", trigger: "blur" }],
  email: [{ required: true, message: "邮箱是必填项", trigger: "blur" }],
  address: [{ required: true, message: "居住地址是必填项", trigger: "blur" }],
  createTime: [{ required: true, message: "创建时间是必填项", trigger: "blur" }]
});
/* 新增对话框中确定按钮 */
const addDialogBtnDisabled = computed(() => {
  const res: boolean =
    addFormParams.value.userName !== "" &&
    addFormParams.value.age !== 0 &&
    addFormParams.value.sex !== "" &&
    addFormParams.value.idCard !== "" &&
    addFormParams.value.email !== "" &&
    addFormParams.value.address !== "" &&
    addFormParams.value.createTime !== "";
  return !res;
});
/* 清空新增参数 */
const clearAddParams = () => {
  addFormParams.value = {
    userId: 0,
    age: 0,
    userName: "",
    sex: "",
    idCard: "",
    email: "",
    address: "",
    status: 0,
    createTime: ""
  };
};

/* 搜索参数 */
const searchParams = ref<SearchParams>({
  pageNum: 1,
  pageSize: 20,
  userName: "",
  address: ""
});
/* 搜索功能 */
const search = async () => {
  const res = await searchUserAPI(searchParams.value);
  if (res.code === 200) {
    tableData.value = res.data.content;
    tableTotal.value = res.data.totalSize;
  }
  handleTableData(tableData.value as TableData[]);
};
/* 清空搜索参数 */
const clearSearchParams = () => {
  searchParams.value = {
    pageNum: 1,
    pageSize: 20,
    address: "",
    userName: ""
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
  userId: 0,
  age: 0,
  userName: "",
  sex: "",
  idCard: "",
  email: "",
  address: "",
  status: 1,
  createTime: ""
});
const updateDialogFormVisible = ref(false);
/* 打开修改对话框 */
const openUpdateDialog = (row: TableData) => {
  updateParams.value.userId = row.userId;
  updateParams.value.age = row.age;
  updateParams.value.userName = row.userName;
  updateParams.value.sex = row.sex;
  updateParams.value.idCard = row.idCard;
  updateParams.value.email = row.email;
  updateParams.value.address = row.address;
  updateParams.value.status = row.status;
  updateParams.value.createTime = row.createTime;
  /* 打开修改对话框 */
  updateDialogFormVisible.value = true;
};
/* 调用修改API */
const updateUser = async () => {
  updateParams.value.status = updateParams.value.status === true ? 1 : 0;
  const res = await updateUserAPI(updateParams.value);
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
  userName: [{ required: true, message: "员工姓名是必填项", trigger: "blur" }],
  age: [{ required: true, message: "年龄是必填项", trigger: "blur" }],
  sex: [{ required: true, message: "性别是必填项", trigger: "blur" }],
  identityCard: [{ required: true, message: "身份证是必填项", trigger: "blur" }],
  email: [{ required: true, message: "邮箱是必填项", trigger: "blur" }],
  address: [{ required: true, message: "居住地址是必填项", trigger: "blur" }],
  createTime: [{ required: true, message: "创建时间是必填项", trigger: "blur" }]
});
/* 修改对话框中确定按钮 */
const updateDialogBtnDisabled = computed(() => {
  const res: boolean =
    updateParams.value.userId !== "" &&
    updateParams.value.userName !== "" &&
    updateParams.value.age !== 0 &&
    updateParams.value.sex !== "" &&
    updateParams.value.idCard !== "" &&
    updateParams.value.email !== "" &&
    updateParams.value.address !== "" &&
    updateParams.value.createTime !== "";
  return !res;
});

/* 初始化table列表 */
const getTableData = async () => {
  const res = await allUserAPI(searchParams.value);
  console.log(res);
  if (res.code === 200) {
    tableData.value = res.data.content;
    tableTotal.value = res.data.totalSize;

    handleTableData(tableData.value as TableData[]);
    console.log("tableData.value", tableData.value);
  }
};

/* 处理tableData数据 */
const handleTableData = (data: TableData[]) => {
  data.forEach((item: TableData) => {
    item.status = item.status === 1;
  });
};
/* table数据 */
const tableData = ref<TableData[]>();
const tableTotal = ref(0);
/* 改变pageSize */
const handleSizeChange = () => {
  getTableData();
};
/* 改变pageNum */
const handleCurrentChange = () => {
  getTableData();
};

onMounted(() => {
  /* 初始化tableData */
  getTableData();
});
</script>

<style lang="scss" scoped>
:deep(.el-drawer__header) {
  height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #999999;
  padding: 0;
  p {
    font-size: 17px;
    color: #333333;
    font-weight: 600;
    padding-left: 20px;
    text-align: start;
  }
}
.dept-search {
  padding: 10px;
  margin: 0 !important;
  background-color: #ffffff;
  border-radius: 10px;
  .el-col {
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
      white-space: nowrap;
    }
  }
}
.dept-operation {
  padding: 10px 0;
}
.table {
  overflow: hidden;
  border-radius: 10px;
  height: 610px;
}
.page-box {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
