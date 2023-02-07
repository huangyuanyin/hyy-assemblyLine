<template>
  <div class="flow-group-splitline" @mouseenter="isExitHover = true" @mouseleave="isExitHover = false" @click="handleAddStage">
    <el-tooltip class="item" content="添加新的阶段" placement="top" :offset="18">
      <svg-icon v-if="!isExitHover" iconName="icon-jiahao"></svg-icon>
      <svg-icon v-else="isExitHover" iconName="icon-jiahao-copy-copy"></svg-icon>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['add-stage'])
const isExitHover = ref(false)

const handleAddStage = () => {
  const name = window.prompt('请输入阶段名称', '新阶段')
  emit('add-stage', {
    name,
    stages: [
      [
        {
          name: '并行1'
        }
      ]
    ]
  })
}
</script>

<style lang="scss" scoped>
.flow-group-splitline {
  position: relative;
  width: 48px;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    height: 100%;
    border-left: 1px solid #dbdbdb;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 48px;
    border-top: 1px solid #dbdbdb;
    margin-left: -24px;
    top: 100px;
  }

  > svg {
    position: absolute;
    left: 50%;
    width: 20px;
    top: 91px;
    margin-left: -10px;
    z-index: 2;
    cursor: pointer;
    color: #595959;
  }
}
</style>
