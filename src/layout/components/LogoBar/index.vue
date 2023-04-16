<template>
  <div class="logo-container">
    <img
      src="@/assets/icons/vue.svg"
      alt=""
    >
    <text v-show="!collapsed">
      后台管理
    </text>
  </div>
</template>

<script setup lang="ts">
defineProps({
  collapsed: {
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px 0;

  img {
    width: 40px;
    height: 40px;
  }

  text {
    font-size: 20px;
  }
}
</style>
