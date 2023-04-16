<template>
  <Icon icon="ep:aim" />
  <Icon
    icon="svg-icon:earth"
    :size="30"
    color="red"
  />
  <ElButton :icon="icon">
    button
  </ElButton>
</template>

<script lang="ts" setup>
import { useIcon } from '@/hooks/useIcon'
import { onMounted } from 'vue'

const icon = useIcon({ icon: 'svg-icon:earth' })

// 测试request请求
const testApi = async () => {
  console.log('加油啊，你要自律')
}

onMounted(() => {
  // 测试request请求
  testApi()
})

console.log('wanhkun w shi nb')

</script>
