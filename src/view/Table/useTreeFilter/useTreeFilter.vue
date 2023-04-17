<template>
  <div class="tree-table">
    <TreeFilter />
    <div class="table-box">
      <ProTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TreeFilter from "@/components/TreeFilter/src/TreeFilter.vue";
import ProTable from "@/components/ProTable/src/ProTable.vue";
</script>

<style lang="scss" scoped></style>
