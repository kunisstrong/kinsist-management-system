<template>
  <el-button type="primary" @click="openAddDialog"> 新增 </el-button>
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
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { AddAndUpdateFormParams } from "@/components/ProTable/type";
import { saveEmpAPI } from "@/api/empManagement";
import { ElMessage, FormRules } from "element-plus";

const props = defineProps({
  openAddDialog: {
    required: true,
    type: Function
  },
  getTableData: {
    required: true,
    type: Function
  }
});

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
    await props.getTableData();
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
/* 新增对话框中确定按钮是否失效 */
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
console.log(props);
</script>

<style lang="scss" scoped></style>
