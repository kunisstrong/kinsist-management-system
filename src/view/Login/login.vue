<template>
  <div class="login-container">
    登陆页面
    <ElButton>
      <router-link to="/index">登录</router-link>
    </ElButton>
  </div>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'

export default {
  name: "index",
  components: { ElButton }
}

</script>

<style lang="scss" scoped>

</style>
