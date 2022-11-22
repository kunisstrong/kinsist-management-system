<script setup lang="ts">

// const emits = defineEmits<{
//   (e: "parentClick", data: string): void
// }>()

const emits = defineEmits<{
  (e: "parentClick", data: string): void
}>()
const clickEmits = (): void => {
  emits('parentClick', 'wangkun')
}

</script>

<template>
  <button @click="clickEmits">子传父</button>
</template>

<style scoped>

</style>
