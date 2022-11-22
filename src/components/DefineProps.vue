<script setup lang="ts">
import { stringify } from 'querystring'

// 接受参数第一种方式，不能设置默认值
// defineProps<{
//   msg: string,
//   arrayList: Array<number>
// }>()

// 第二种方法，给引用类型设置默认值不生效
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//     default: 'hello'
//   },
//   arrayList: {
//     type: Array,
//     required: true,
//     defauilt: [23, 3]
//   }
// })

// 第三种方式，
const props = withDefaults(
  defineProps<{
    msg: string,
    arrayList: Array<number>
  }>(), {
  msg: 'wangkun',
  arrayList: () => [1, 3, 4, 5]
}
)
</script>

<template>
  <div class="msg">
    {{ msg }}
  </div>
  <div class="array" v-for="(item, index) in arrayList" :key="index">
    {{ item }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
