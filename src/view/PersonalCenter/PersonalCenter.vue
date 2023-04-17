<template>
  <div class="personal-container">
    <div class="personal-msg">
      <div class="title">个人信息</div>
      <div class="personal-msg-box">
        <div class="img-box">
          <img src="@/assets/img/headPhoto.jpeg" alt="头像" />
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:username" :size="20" />
            <span>用户名称</span>
          </div>
          <p>{{ userInfo.username }}</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:phone" :size="20" />
            <span>手机号码</span>
          </div>
          <p>{{ userInfo.phone }}</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:email" :size="20" />
            <span>用户邮箱</span>
          </div>
          <p>{{ userInfo.email }}</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:department" :size="20" />
            <span>所属部门</span>
          </div>
          <p>董事长</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20" />
            <span>所属角色</span>
          </div>
          <p>超级管理员</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:date" :size="20" />
            <span>创建日期</span>
          </div>
          <p>2023-02-03 11:11:26</p>
        </div>
      </div>
    </div>
    <div class="base-information">
      <div class="title">基本信息</div>
      <div class="base-information-box">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="基本信息" name="first">
            <el-form label-width="100px" :model="formLabelAlign" style="max-width: 460px" :rules="rules">
              <el-form-item label="用户昵称" prop="username">
                <el-input v-model="formLabelAlign.username" clearable />
              </el-form-item>
              <el-form-item label="手机号码" prop="phone">
                <el-input v-model="formLabelAlign.phone" clearable />
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="formLabelAlign.email" clearable />
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="formLabelAlign.sex" class="ml-4">
                  <el-radio label="1"> 男 </el-radio>
                  <el-radio label="2"> 女 </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveUserInfo"> 保存 </el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="second">
            <el-form label-width="100px" :model="changePswInfo" style="max-width: 460px" :rules="changePswRules">
              <el-form-item label="旧密码" prop="oldPwd">
                <el-input v-model="changePswInfo.oldPwd" placeholder="请输入旧密码" clearable />
              </el-form-item>
              <el-form-item label="新密码" prop="newPwd">
                <el-input v-model="changePswInfo.newPwd" placeholder="请输入新密码" clearable />
              </el-form-item>
              <el-form-item label="确认密码" prop="againNewPwd">
                <el-input v-model="changePswInfo.againNewPwd" placeholder="请再次输入新密码" clearable />
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="saveUserInfo"> 保存 </el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from "element-plus";
import { reactive, ref } from "vue";

const activeName = ref("first");
// 用户基础信息
const userInfo = reactive({
  username: "admin",
  phone: "13115604410",
  email: "910009136@qq.com",
  sex: "1"
});
// 保存用户基础讯信息
const saveUserInfo = () => {
  userInfo.username = formLabelAlign.username;
  userInfo.phone = formLabelAlign.phone;
  userInfo.email = formLabelAlign.email;
  userInfo.username = formLabelAlign.username;
};

// 基础信息表单
const formLabelAlign = reactive({
  username: "admin",
  phone: "13115604410",
  email: "910009136@qq.com",
  sex: "1"
});

// 基础信息校验
const rules = reactive<FormRules>({
  username: [{ required: true, message: "用户姓名是必填项", trigger: "blur" }],
  phone: [{ required: true, message: "手机号是必填项", trigger: "blur" }],
  email: [{ required: true, message: "邮箱是必填项", trigger: "blur" }]
});

// 修改密码信息
const changePswInfo = reactive({
  oldPwd: "",
  newPwd: "",
  againNewPwd: ""
});

// 修改密码校验
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== changePswInfo.newPwd) {
    callback(new Error("两次输入的密码不匹配"));
  } else {
    callback();
  }
};
const changePswRules = reactive<FormRules>({
  oldPwd: [{ required: true, message: "旧密码是必填项", trigger: "blur" }],
  againNewPwd: [{ validator: validatePass2, trigger: "blur" }],
  newPwd: [{ required: true, message: "请输入新密码", trigger: "blur" }]
});
</script>

<style lang="scss" scoped>
:deep(.el-form) {
  .el-form-item {
    margin: 30px 0;
  }
  .el-form-item__label {
    font-size: 14px;
    color: #000000;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  font-size: 32px;
  font-weight: 600;
  color: #6b778c;
}
.demo-tabs {
  .item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
  }
}
.personal-container {
  display: flex;
  height: calc(100vh - 120px);
  padding: 20px;
  .personal-msg {
    width: 25%;
    height: 700px;
    background-color: white;
    border-radius: 10px;
    .title {
      padding: 10px;
      font-size: 18px;
      text-align: start;
      border-bottom: 1px solid #e2e8f3;
    }
    .personal-msg-box {
      padding: 20px;
      .img-box {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e2e8f3;
        img {
          width: 120px;
          height: 120px;
          border-radius: 60px;
        }
      }
      .personal-msg-item {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #e2e8f3;
        .sub-title {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .base-information {
    width: 75%;
    height: 600px;
    margin-left: 10px;
    background-color: white;
    border-radius: 10px;
    .title {
      padding: 10px;
      font-size: 18px;
      text-align: start;
      border-bottom: 1px solid #e2e8f3;
    }
    .base-information-box {
      padding: 20px;
    }
  }
}
</style>
