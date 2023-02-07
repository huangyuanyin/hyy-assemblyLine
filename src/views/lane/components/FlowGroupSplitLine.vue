<template>
  <div class="flow-group-splitline" @click="handleAddStage">
    <svg-icon iconName="icon-jiahao"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['add-stage'])

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
