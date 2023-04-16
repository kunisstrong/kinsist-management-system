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
import { ElButton } from "element-plus";
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
  background-color: #07172e;
  color: white;

  .el-input__inner {
    color: white;
  }
}

:deep(.el-button) {
  background-color: #07172e;
  color: white;

  a {
    color: white;
  }
}

.login-container {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/logoBg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 400px;
    height: 300px;
    background-color: #07172e;
    opacity: 0.7;
    border: 1px solid #999999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    padding: 0 30px;

    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      p {
        white-space: nowrap;
        width: 80px;
      }
    }
  }
}
</style>
