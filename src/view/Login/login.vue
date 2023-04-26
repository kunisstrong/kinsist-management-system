<template>
  <div class="login-container">
    <div class="login-box">
      <p>kun式管理系统</p>
      <div class="box">
        <p>用户名</p>
        <el-input v-model="params.username" type="text" placeholder="请输入用户名" />
      </div>
      <div class="box">
        <p>密码</p>
        <el-input v-model="params.password" password placeholder="请输入密码" />
      </div>
      <ElButton @click="toLogin"> 登录</ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const toLogin = () => {
  router.push("/index");
};

const params = reactive({
  username: "admin",
  password: "123456"
});
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  color: white;
  background-color: #07172e;
  .el-input__inner {
    color: white;
  }
}
:deep(.el-button) {
  color: white;
  background-color: #07172e;
  a {
    color: white;
  }
}
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/logoBg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    height: 300px;
    padding: 0 30px;
    color: white;
    background-color: #07172e;
    border: 1px solid #999999;
    opacity: 0.7;
    .box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      p {
        width: 80px;
        white-space: nowrap;
      }
    }
  }
}
</style>
