<template>
  <Icon icon="ep:aim" />
  <Icon icon="svg-icon:earth" size="30" />
  <ElButton :icon="icon"> button</ElButton>
</template>

<script lang="ts" setup>
import { useIcon } from "@/hooks/useIcon";

const icon = useIcon({ icon: 'svg-icon:earth' })
</script>
