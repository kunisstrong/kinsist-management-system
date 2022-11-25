<template>
  <div class="employee-container">
    <div class="employee-container-top">
      <el-button size="large" type="primary">新增</el-button>
      <el-input class="input" v-model="input" placeholder="请输入账号查询" clearable/>
      <el-button size="large" type="primary" style="margin-left: 10px">查询</el-button>
    </div>

    <div class="employee-container-content">
      <el-table :data="tableData" height="600" style="width: 100%">
        <el-table-column prop="id" label="id号" width="400"/>
        <el-table-column prop="photo" label="头像" width="400"/>
        <el-table-column prop="account" label="账号" width="400"/>
        <el-table-column prop="password" label="密码" width="300"/>
        <el-table-column align="right">
          <template #default="scope">
            <el-button size="small" @click="handleEdit()">
              编辑
            </el-button
            >
            <el-button
                size="small"
                type="danger"
                @click="handleDelete()"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

// 上方搜索框
const input = ref('')

const handleEdit = () => {
}
const handleDelete = () => {
}

// table表单信息
const tableData = [
  {
    id: '1001',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  },
  {
    id: '1002',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  },
  {
    id: '1003',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  },
  {
    id: '1004',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  },
  {
    id: '1005',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  },
  {
    id: '1006',
    photo: '头像一',
    account: 'admin1',
    password: 'admin123',
  }
]
</script>

<style lang="scss" scoped>
.employee-container {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);

  .employee-container-top {
    display: flex;
    justify-content: start;
    align-items: center;

    .input {
      width: 250px;
      height: 40px;
      margin-left: 10px;
    }
  }

  .employee-container-content {
    width: 100%;
    margin-top: 10px;

  }
}
</style>
