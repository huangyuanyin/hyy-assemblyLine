<template>
  <div class="flow-group">
    <div class="group-head">
      <div class="editor">
        <span v-if="!data.isEditor">{{ flow.name }}</span>
        <input v-else type="text" :value="data.value" @input="handleInput" />
      </div>
      <button @click="handleEditor">
        {{ data.isEditor ? '保存' : '编辑' }}
      </button>
      &nbsp;
      <button @click="$emit('remove-flow')">删除</button>
    </div>
    <div class="stages">
      <Stage v-for="(stage, index) in flow.stages" :stage="stage" :flow="flow" @removeStage="handleRemoveStage(index)" />
      <AddStage :stages="flow.stages" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import Stage from './Stage.vue'
import AddStage from './AddStage.vue'

const props = defineProps({
  flow: {
    type: Object,
    required: true
  }
})

const data = reactive({
  isEditor: false,
  value: props.flow.name
})

const handleRemoveStage = (index: any) => {
  props.flow.stages.splice(index, 1)
}
const handleInput = (e: any) => {
  data.value = e.target.value
}
const handleEditor = () => {
  if (data.isEditor) {
    data.isEditor = false
    props.flow.name = data.value
    return
  }
  data.isEditor = true
  data.value = props.flow.name
}
</script>

<style lang="scss" scoped>
.flow-group {
  padding-top: 20px;

  &:hover {
    .stage:nth-last-child(2)::before {
      border-radius: 0;
    }
    .add-stage-container {
      opacity: 1;
      // display: block;
    }
  }
}
.group-head {
  display: flex;
  padding: 0 20px;
  height: 22px;
  margin-bottom: 28px;
}
</style>
