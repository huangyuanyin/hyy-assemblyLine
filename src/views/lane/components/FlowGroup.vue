<template>
  <div class="flow-group">
    <div class="group-head">
      <div class="name">
        <span v-if="!data.isEditor">{{ flow.name }}</span>
        <el-input v-else type="text" v-model="data.value" @input="handleInput"></el-input>
      </div>
      <div class="editor">
        <el-icon @click="handleEditor" v-if="data.isEditor"><Check /></el-icon>
        <el-icon @click="handleEditor" v-else><Edit /></el-icon>
      </div>
      <div class="delete">
        <el-icon @click="$emit('remove-flow')"><Delete /></el-icon>
      </div>
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
import { Delete, Check, Edit } from '@element-plus/icons-vue'

const emit = defineEmits(['removeFlow'])

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
  if (props.flow.stages.length === 1) {
    return emit('removeFlow')
  }
  props.flow.stages.splice(index, 1)
}

const handleInput = (e: any) => {
  data.value = e
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
  align-items: center;
  .name {
    span {
      color: #8b8b8b;
    }
  }
  .editor {
    margin: 0 5px;
  }
}
</style>
