<template>
    <div class="user-container">
        <!-- <div class="search">
            <div class="user search-item">
                <p style="margin-right: 10px">检查项目</p>
                <ElInput v-model="checkProjectListParams.inspectProject" placeholder="请输入检查项目" clearable />
            </div>
            <div class="postName search-item">
                <p style="margin-right: 10px">检查点</p>
                <ElInput v-model="checkProjectListParams.inspectDot" placeholder="请输入检查点" clearable />
            </div>
            <div class="postName search-item">
                <p style="margin-right: 10px">风险点</p>
                <ElInput v-model="checkProjectListParams.riskDot" placeholder="请输入检查点" clearable />
            </div>
            <div class="status search-item">
                <p style="margin-right: 10px">状态</p>
                <ElSelect v-model="checkProjectListParams.status" class="m-2" placeholder="用户状态" clearable>
                    <ElOption v-for="item in status" :key="item.value" :label="item.label" :value="item.value" />
                </ElSelect>
            </div>

            <div class="search-btn search-item">
                <ElButton type="primary" @click="search">搜索</ElButton>
                <ElButton type="warning" @click="reset">重置</ElButton>
            </div>
        </div> -->
        <div class="btn">
            <ElButton @click="addFormVisible = true" type="primary">新增</ElButton>
            <ElButton type="success" @click="updateFormVisible = true" :disabled="modificationDisable">修改</ElButton>
            <ElButton type="danger" @click="delUserByID" :disabled="delDisable">删除</ElButton>
            <ElButton @click="exportExcel" type="warning" :disabled="exportDisable">导出</ElButton>
        </div>
        <el-dialog v-model="addFormVisible" title="新增员工">
            <el-form :model="addFormInfo" :rules="rules">
                <el-form-item label="姓名" label-width="140" prop="name">
                    <el-input v-model="addFormInfo.name" autocomplete="off" clearable placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="年龄" label-width="140" prop="age">
                    <el-input v-model="addFormInfo.age" autocomplete="off" clearable placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label="性别" label-width="140" prop="sex">
                    <el-select v-model="addFormInfo.sex" placeholder="请选择性别" clearable>
                        <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="入职时间" label-width="140" prop="entryData">
                    <el-date-picker v-model="addFormInfo.entryData" type="date" value-format="YYYY/MM/DD"
                        format="YYYY/MM/DD" placeholder="请选择入职时间" />
                </el-form-item>
                <el-form-item label="职位" label-width="140" prop="position">
                    <el-select v-model="addFormInfo.postion" placeholder="请选择职位" clearable>
                        <el-option v-for="item in positionList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="薪水" label-width="140" prop="salary">
                    <el-input v-model="addFormInfo.salary" autocomplete="off" clearable placeholder="请输入薪水" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="postAddCheckProject" :disabled="addBtnDisabled">确认</el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="updateFormVisible" title="员工信息修改">
            <el-form :model="updateFormInfo" :rules="rules">
                <el-form-item label="姓名" label-width="140" prop="name">
                    <el-input v-model="updateFormInfo.name" autocomplete="off" clearable placeholder="请输入姓名" />
                </el-form-item>
                <el-form-item label="年龄" label-width="140" prop="age">
                    <el-input v-model="updateFormInfo.age" autocomplete="off" clearable placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label="性别" label-width="140" prop="sex">
                    <el-select v-model="updateFormInfo.sex" placeholder="请选择性别" clearable>
                        <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="入职时间" label-width="140" prop="entryData">
                    <el-date-picker v-model="updateFormInfo.entryData" type="date" value-format="YYYY/MM/DD"
                        format="YYYY/MM/DD" placeholder="请选择入职时间" />
                </el-form-item>
                <el-form-item label="职位" label-width="140" prop="position">
                    <el-select v-model="updateFormInfo.postion" placeholder="请选择职位" clearable>
                        <el-option v-for="item in positionList" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="薪水" label-width="140" prop="salary">
                    <el-input v-model="updateFormInfo.salary" autocomplete="off" clearable placeholder="请输入薪水" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="postUpdateCheckProject" :disabled="updateBtnDisabled">确认</el-button>
                </span>
            </template>
        </el-dialog>
        <div class="table">
            <el-table ref="multipleTableRef" :data="tableData" max-height="520" border style="width: 100%" @select="select"
                @select-all="selectAll">
                <el-table-column type="selection" width="55" align="center" />
                <el-table-column type="index" label="序号" width="55" align="center" />
                <el-table-column property="name" label="姓名" width="120" align="center" />
                <el-table-column property="postion" label="职位" align="center" />
                <el-table-column property="salary" label="薪水(元)" align="center" />
                <el-table-column property="sex" label="性别" />
                <el-table-column property="age" label="年龄" />
                <el-table-column property="entryData" label="入职时间" align="center" />
            </el-table>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue"
import { ElMessage, ElMessageBox, FormRules, } from "element-plus"
import * as XLSX from 'xlsx'
import { staffManagementList } from "@/api/staffManagement"
import { staffManagementTable } from "./type"

onMounted(() => {
    // 初始化userList
    getCheckProjectList()
})
/* 导出 */
let exportData: staffManagementTable[] = reactive([])
const exportExcel = () => {
    // 将表头key转换成中文
    const list = [];//定义list数组
    const obj: any = {};
    for (var i = 0; i < exportData.length; i++) {
        obj.value = {};
        // 将对应的英文key转化为自己想要的中文key
        for (var key in exportData[i]) {
            if (key == 'id') {
                obj.value['序号'] = i + 1;
            } else if (key == 'name') {
                obj.value['姓名'] = exportData[i][key];
            } else if (key == 'age') {
                obj.value['年龄'] = exportData[i][key];
            } else if (key == 'entryData') {
                obj.value['入职时间'] = exportData[i][key];
            } else if (key == 'postion') {
                obj.value['职位'] = exportData[i][key];
            } else if (key == 'salary') {
                obj.value['薪水'] = exportData[i][key];
            } else if (key == 'sex') {
                obj.value['性别'] = exportData[i][key];
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
    XLSX.writeFile(wb, '员工信息.xlsx')

    // 各种按钮的状态
    idList.length = 0
    modificationDisable.value = idList.length !== 1
    exportDisable.value = idList.length < 1
    delDisable.value = idList.length < 1
}
/* 修改对话框是否可见 */
let updateFormVisible = ref(false)
/* 修改功能参数 */
const updateFormInfo = ref<staffManagementTable>({
    name: '',
    id: 0,
    sex: '',
    postion: '',
    age: 12,
    entryData: '',
    salary: 12,
})
/* 修改功能 */
const postUpdateCheckProject = async () => {
    updateFormVisible.value = false
    tableData.value[updateFormInfo.value.id - 1] = updateFormInfo.value
    ElMessage({
        message: '修改成功',
        type: 'success'
    })

    // 各种按钮的状态
    idList.length = 0
    modificationDisable.value = idList.length !== 1
    exportDisable.value = idList.length < 1
    delDisable.value = idList.length < 1
}
/* 修改确定按钮是否失效 */
let updateBtnDisabled = computed(() => {
    const res: boolean = updateFormInfo.value.name !== '' && updateFormInfo.value.age !== 0 && updateFormInfo.value.sex !== '' && updateFormInfo.value.postion !== '' && updateFormInfo.value.salary !== 0 && updateFormInfo.value.entryData !== ''
    return !res
})
/* 新增对话框是否可见 */
let addFormVisible = ref(false)
/* 新增功能 */
const postAddCheckProject = async () => {
    addFormVisible.value = false
    addFormInfo.value.id = tableData.value.length + 1
    console.log(addFormInfo.value);

    tableData.value.push(addFormInfo.value)
    ElMessage({
        message: '新增成功',
        type: 'success'
    })
    /* 清空参数 */
    clearAddForm()
}
/* 验证规则 */
const rules = reactive<FormRules>({
    name: [
        { required: true, message: '姓名是必填项', trigger: 'blur' },
    ],
    age: [
        { required: true, message: '年龄是必填项', trigger: 'blur' },
    ],
    sex: [
        { required: true, message: '性别是必填项', trigger: 'blur' },
    ],
    position: [
        { required: true, message: '职位是必填项', trigger: 'blur' },
    ],
    salary: [
        { required: true, message: '薪水是必填项', trigger: 'blur' },
    ],
    entryData: [
        { required: true, message: '入职时间是必填项', trigger: 'blur' },
    ],
})
/* 新增功能参数 */
const addFormInfo = ref<staffManagementTable>({
    name: '',
    id: 0,
    sex: '',
    postion: '',
    age: 12,
    entryData: '',
    salary: 12,
})
/* 清空新增Form */
const clearAddForm = () => {
    addFormInfo.value = {
        inspectProject: "",
        inspectDot: "",
        riskDot: "",
        inspectPeriod: "",
        status: 0,
        inspectStandard: "",
    }
}
/* 新增参数有一项是空，按钮就为不可点状态 */
let addBtnDisabled = computed(() => {
    const res: boolean = addFormInfo.value.name !== '' && addFormInfo.value.age !== 0 && addFormInfo.value.sex !== '' && addFormInfo.value.postion !== '' && addFormInfo.value.salary !== 0 && addFormInfo.value.entryData !== ''
    return !res
})
/* userList多选框 */
let idList: number[] = reactive([])
let modificationDisable = ref(true)
let exportDisable = ref(true)
let delDisable = ref(true)
/* table单选 */
const select = (val: Array<staffManagementTable>) => {
    if (val.length > 0) {
        updateFormInfo.value.id = val[0].id
        updateFormInfo.value.age = val[0].age
        updateFormInfo.value.sex = val[0].sex
        updateFormInfo.value.entryData = val[0].entryData
        updateFormInfo.value.salary = val[0].salary
        updateFormInfo.value.postion = val[0].postion
        updateFormInfo.value.name = val[0].name
    }

    // 导出的list
    exportData = val

    // 删除
    const res: number[] = reactive([])
    val.forEach((item: { id: number }) => {
        res.push(item.id)
    })
    idList = res

    /* 各种按钮的状态 */
    modificationDisable.value = idList.length !== 1
    exportDisable.value = idList.length < 1
    delDisable.value = idList.length < 1
}
/* table全选 */
const selectAll = (selection: Array<any>) => {
    console.log(selection)

    // 导出的list
    exportData = selection

    // 删除
    const res: number[] = reactive([])
    selection.forEach((item: any) => {
        res.push(item.id)
    })
    idList = res

    // 各种按钮的状态
    modificationDisable.value = idList.length !== 1
    exportDisable.value = idList.length < 1
    delDisable.value = idList.length < 1
}
/* 删除 */
const delUserByID = async () => {
    ElMessageBox.confirm(
        '确定要删除该条员工信息吗?',
        '系统提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(async () => {
        const temp = tableData.value
        idList.forEach((item: number) => {
            console.log("item", item);
            tableData.value.forEach((subItem: staffManagementTable) => {
                if (subItem.id === item) {
                    tableData.value.splice(tableData.value.indexOf(subItem), 1)
                }
            })
        })
        ElMessage({
            message: '删除成功',
            type: 'success',
        })
        // 各种按钮的状态
        idList.length = 0
        modificationDisable.value = idList.length !== 1
        exportDisable.value = idList.length < 1
        delDisable.value = idList.length < 1
    })


}
/* 搜索 */
const search = () => {
    // getCheckProjectList()
}
/* 重置 */
const reset = () => {
    // 清空参数
    clearCheckProjectListParams()
    // 请求列表
    getCheckProjectList()
}
/* 分页总条数 */
const totalNum = ref(0)
/* 分页发生改变 */
const changePage = async (val: number) => {
    checkProjectListParams.page = val
    await getCheckProjectList()
}
/* 清空请求列表参数 */
const clearCheckProjectListParams = () => {
    checkProjectListParams.page = 1
    checkProjectListParams.size = 10
    checkProjectListParams.inspectProject = ''
    checkProjectListParams.inspectDot = ''
    checkProjectListParams.riskDot = ''
    checkProjectListParams.status = 0
}
/* 列表请求参数 */
const checkProjectListParams = reactive<any>({
    page: 1,
    size: 10,
    inspectProject: '',
    inspectDot: '',
    riskDot: '',
    status: ''
})
/* table数据 */
let tableData = ref<Array<staffManagementTable>>([])
/* 初始化userList */
const getCheckProjectList = async () => {
    const { data } = await staffManagementList()
    tableData.value = data.data
    totalNum.value = data.data.length
}
/* 状态 */
const status = [
    {
        value: 0,
        label: "正常",
    },
    {
        value: 1,
        label: "停用",
    },
]
/* 职位字段 */
// ["研发部经理", "前端开发工程师", "后端开发工程师", "测试工程师", "产品经理", "UI设计师", "架构师", "运维工程师"],
const positionList = reactive([
    {
        label: '研发部经理',
        value: '研发部经理'
    },
    {
        label: '前端开发工程师',
        value: '前端开发工程师'
    },
    {
        label: '后端开发工程师',
        value: '后端开发工程师'
    },
    {
        label: '测试工程师',
        value: '测试工程师'
    },
    {
        label: '产品经理',
        value: '产品经理'
    },
    {
        label: 'UI设计师',
        value: 'UI设计师'
    },
    {
        label: '架构师',
        value: '架构师'
    },
    {
        label: '运维工程师',
        value: '运维工程师'
    },
])
/* 性别字段 */
const sexList = reactive([
    {
        label: '男士',
        value: '男士'
    },
    {
        label: '女士',
        value: '女士'
    },
])
</script>

<style lang="scss" scoped>
:deep(.el-dialog) {

    .dialog-footer-import {
        margin: auto;
        display: flex;
        width: 80%;
        justify-content: space-between;

        .box {
            width: 600px;
        }
    }
}

.user-container {
    padding: 10px;
    height: calc(100% - 55px);
    background-color: #eeeeee;

    .search {
        width: 100%;
        display: flex;
        justify-content: space-around;
        border-radius: 10px;
        box-shadow: 0 0 5px 5px #cdcdcd;
        background-color: white;

        @mixin base-style {
            display: flex;
            justify-content: space-between;
            align-items: center;
            white-space: nowrap;
        }

        .search-item {
            @include base-style();
        }
    }

    .btn {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .table {
        margin-top: 10px;
        box-sizing: border-box;
        background-color: white;

        .paging {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
    }

}
</style>
  