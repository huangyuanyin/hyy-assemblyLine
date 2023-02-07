<template>
  <el-button @click="handleAddFlow">添加流水线</el-button>
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

const handleAddFlow = () => {}
</script>

<style lang="scss" scoped></style>
