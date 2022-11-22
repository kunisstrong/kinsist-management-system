<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
// 文字信息
const msg = ref<string>('wangkun')
// 测试vuex
const store = useStore()

const count = computed(() => {
  return store.state.count
})
const increment = () => {
  store.commit('increment')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">{{ count }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
