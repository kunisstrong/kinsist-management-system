<template>
  <div class="personal-container">
    <div class="personal-msg">
      <div class="title">
        个人信息
      </div>
      <div class="personal-msg-box">
        <div class="img-box">
          <img src="src/assets/img/headPhoto.jpeg" alt="头像">
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20"/>
            <span>用户名称</span>
          </div>
          <p>admin</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:phone" :size="20"/>
            <span>手机号码</span>
          </div>
          <p>13115604410</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20"/>
            <span>用户邮箱</span>
          </div>
          <p>910009136@qq.com</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20"/>
            <span>所属部门</span>
          </div>
          <p>董事长</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20"/>
            <span>所属角色</span>
          </div>
          <p>超级管理员</p>
        </div>
        <div class="personal-msg-item">
          <div class="sub-title">
            <Icon icon="svg-icon:visitUser" :size="20"/>
            <span>创建日期</span>
          </div>
          <p>2023-02-03 11:11:26</p>
        </div>
      </div>


    </div>
    <div class="base-information">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.personal-container {
  height: calc(100vh - 120px);
  padding: 20px;
  display: flex;

  .personal-msg {
    background-color: white;
    width: 25%;
    height: auto;

    .title {
      font-size: 18px;
      padding: 10px;
      border-bottom: 1px solid #e2e8f3;
      text-align: start;
    }

    .personal-msg-box {
      padding: 20px;


      .img-box {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #e2e8f3;


        img {
          border-radius: 60px;
          width: 120px;
          height: 120px;
        }
      }

      .personal-msg-item {
        border-bottom: 1px solid #e2e8f3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;

        .sub-title {
          display: flex;
          align-items: center;
        }
      }
    }


  }
}

</style>
