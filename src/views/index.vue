<template>
  <el-link type="primary">添加流水线</el-link>
  <Lane :flows="data.flows" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Lane from './lane/index.vue'

const data = reactive({
  flows: [
    // {
    //   name: '部署',
    //   stages: [
    //     [
    //       {
    //         name: '串行'
    //       }
    //     ]
    //   ]
    // }
  ]
})
</script>

<style lang="scss" scoped></style>
