<template>
  <div class="flow-group-splitline" @click="handleAddStage">
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
      <path
        fill="currentColor"
        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
      ></path>
    </svg>
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
  }
}
</style>
