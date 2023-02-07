<template>
  <div class="add-stage-container">
    <div class="add-stage" @click="handleAddParaller">并行任务</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  stages: {
    type: Array,
    required: true
  }
})

const handleAddParaller = () => {
  props.stages.push([
    {
      name: '新并行'
    }
  ])
}
</script>

<style lang="scss" scoped>
.add-stage-container {
  position: relative;
  height: 60px;
  opacity: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -50%;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 100%;
    border-radius: 0 0 16px 16px;
  }
}
.add-stage {
  position: absolute;
  left: 94px;
  top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  padding: 0 12px;
  color: #292929;
  border-radius: 20px;
  background-color: #fff;
  z-index: 2;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
}
</style>
