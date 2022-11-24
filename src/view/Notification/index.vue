<template>
  <div class="notification-container">
    <div class="notification-title">
      <div class="unread">
        未读通知
      </div>
      <div class="read" style="margin-left: 20px">
        已读通知
      </div>
    </div>
    <div class="notification-content">
      <div class="notification-content-item">
        <div class="content-item-title">
          关于开展核实部门虚假消费报销工作
        </div>
        <div class="content-item-detail">
          <span>测试部门部门虚假消费报销工作测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <el-icon>
            <BellFilled/>
          </el-icon>
        </div>
        <div class="content-item-time">
          <span>
            2022-6-13
          </span>
        </div>
      </div>
      <div class="notification-content-item">
        <div class="content-item-title">
          关于开展核实部门虚假消费报销工作
        </div>
        <div class="content-item-detail">
          <span>测试部门部门虚假消费报销工作测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <el-icon>
            <BellFilled/>
          </el-icon>
        </div>
        <div class="content-item-time">
          <span>
            2022-6-13
          </span>
        </div>
      </div>
      <div class="notification-content-item">
        <div class="content-item-title">
          关于开展核实部门虚假消费报销工作
        </div>
        <div class="content-item-detail">
          <span>测试部门部门虚假消费报销工作测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span>
          <el-icon>
            <BellFilled/>
          </el-icon>
        </div>
        <div class="content-item-time">
          <span>
            2022-6-13
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.notification-container {
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);


  .notification-title {
    width: 100%;
    height: 10%;
    font-size: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #b9b6b6;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .notification-content {
    width: 100%;
    height: 90%;
    background-color: white;
    box-sizing: border-box;
    padding: 10px 20px;

    .notification-content-item {
      box-sizing: border-box;
      width: 100%;
      height: 150px;
      background-color: #e5e3e3;
      border-radius: 20px;
      padding: 10px 150px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .content-item-title {
        width: 100%;
        text-align: start;
        font-size: 20px;
      }

      .content-item-detail {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .content-item-time {
        width: 80%;
        text-align: right;
      }
    }
  }
}
</style>
