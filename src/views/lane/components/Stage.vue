<template>
  <div class="stage">
    <div class="task-container">
      <div class="job1">
        <el-tooltip class="item" content="自动触发" placement="top" :offset="20">
          <svg-icon v-show="automatic" iconName="icon-shandian" @click="triggerMethod(false)"></svg-icon>
        </el-tooltip>
        <el-tooltip class="item" content="手动触发" placement="top" :offset="20">
          <svg-icon v-show="!automatic" iconName="icon-shoushoushi" @click="triggerMethod(true)"></svg-icon>
        </el-tooltip>
      </div>
      <template v-for="(parallel, index) of stage">
        <div class="content-job">
          <div class="job2" @mouseenter="isExitHover_one = true" @mouseleave="isExitHover_one = false" @click="handleAddParallel('before', index)">
            <el-tooltip class="item" content="串行任务" placement="top" :offset="18">
              <svg-icon v-if="!isExitHover_one" iconName="icon-jiahao"></svg-icon>
              <svg-icon v-else="isExitHover_one" iconName="icon-jiahao-copy-copy"></svg-icon>
            </el-tooltip>
          </div>
          <div class="job3" @click="openTaskDetailDrawer(parallel.name, index)">
            {{ parallel.name }}
          </div>
          <div class="job4" @mouseenter="isExitHover_two = true" @mouseleave="isExitHover_two = false" @click="handleAddParallel('after', index)">
            <el-tooltip class="item" content="串行任务" placement="top" :offset="18">
              <svg-icon v-if="!isExitHover_two" iconName="icon-jiahao"></svg-icon>
              <svg-icon v-else="isExitHover_two" iconName="icon-jiahao-copy-copy"></svg-icon>
            </el-tooltip>
          </div>
        </div>
      </template>
    </div>
  </div>
  <TaskDetailDrawer :taskDetailName="taskDetailName" :taskDetailDrawer="taskDetailDrawer" @closeDrawer="closeDrawer" @deleteTask="handleRemoveParallel(taskId)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TaskDetailDrawer from '@/components/TaskDetailDrawer.vue'

const props = defineProps({
  stage: {
    type: Object,
    required: true
  },
  flow: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['removeStage'])
const isExitHover_one = ref(false)
const isExitHover_two = ref(false)
const automatic = ref(true)
const taskDetailDrawer = ref(false)
const taskDetailName = ref('')
const taskId = ref('')

const handleAddParallel = (position: any, index: any) => {
  index = position === 'before' ? index : index + 1
  props.stage.splice(index, 0, {
    name: '新串行'
  })
}

const handleRemoveParallel = (id: any) => {
  if (props.stage.length > 1) {
    props.stage.splice(id, 1)
  } else {
    emit('removeStage')
  }
  closeDrawer([false])
}

const triggerMethod = (value: boolean) => {
  automatic.value = value
}

const openTaskDetailDrawer = (value: any, id: any) => {
  taskId.value = id
  taskDetailDrawer.value = true
  taskDetailName.value = value
}

const closeDrawer = (value?: any) => {
  if (value[1]) {
    props.stage[taskId.value].name = value[1].name
  }
  taskDetailDrawer.value = value[0]
}
</script>

<style lang="scss" scoped>
.stage {
  position: relative;
  height: 60px;
  cursor: pointer;

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
  }

  &:first-child::before {
    border-left: none;
    border-right: none;
    border-radius: 0 !important;
  }

  &:nth-last-child(2)::before {
    border-radius: 0 0 16px 16px;
  }
}

.task-container {
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 14px;
  height: 100%;

  .job1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
    z-index: 2;
    > svg {
      width: 20px;
      height: 20px;
    }
  }

  .job1:hover {
    border: 1px solid #1b9aee;
  }

  .content-job {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    .job3 {
      border: 1px solid #fff;
    }
    // position: absolute;
    // left: 50px;

    &:hover {
      .job3 {
        border: 1px solid #1b9aee;
      }
      .job2,
      .job4 {
        opacity: 1;
      }
    }
  }

  .job2,
  .job4 {
    opacity: 0;
    // position: absolute;
    // top: 20px;
    width: 20px;
    height: 20px;
    z-index: 2;
  }

  .job3 {
    // position: absolute;
    // left: 30px;
    // top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 40px;
    padding: 0 12px;
    margin: 0 10px;
    color: #292929;
    border-radius: 20px;
    background-color: #fff;
    z-index: 2;
    box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
  }

  .job4 {
    left: 190px;
    z-index: 2;
  }
}
</style>

<style lang="scss"></style>
