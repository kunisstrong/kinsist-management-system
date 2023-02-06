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
            <BellFilled />
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
            <BellFilled />
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
            <BellFilled />
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


  <h1>websocket</h1>
  {{ data }}
</template>

<script setup lang="ts">
import { ref } from 'vue';

let websocket: WebSocket | null = null

const data = ref('我是初始值')
// 判断当前浏览器是否支持websocket，主要此处要更换为自己的地址
if ('WebSocket' in window) {
  websocket = new WebSocket("ws://172.16.6.195:10009/websocket/1")
  // 连接发生错误的回调方法
  websocket.onerror = () => {
    console.log('服务器通信失败')
  }

  // 连接成功建立的回调方法
  websocket.onopen = () => {
    console.log('与服务器已建立连接')
  }

  // 接收到消息的回调方法
  websocket.onmessage = (event) => {
    console.log(event.data)
    data.value = event.data
  }

  // 连接关闭的回调方法
  websocket.onclose = () => {
    console.log('websocket连接已关闭')
  }

  // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会跑出异常
  window.onbeforeunload = () => {
    (websocket as WebSocket).close()
  }
} else {
  console.log('not support websocket')
}


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
