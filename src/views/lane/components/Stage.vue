<template>
  <div class="stage">
    <div class="task-container">
      <div class="job1">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
          <path
            fill="currentColor"
            d="M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
          ></path>
        </svg>
      </div>
      <template v-for="(parallel, index) of stage">
        <div class="content-job">
          <div class="job2" @click="handleAddParallel('before', index)">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
              <path
                fill="currentColor"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
              ></path>
            </svg>
          </div>
          <div class="job3" @dblclick="handleRemoveParallel(index)">
            {{ parallel.name }}
          </div>
          <div class="job4" @click="handleAddParallel('after', index)">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
              <path
                fill="currentColor"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
              ></path>
            </svg>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
const handleAddParallel = (position: any, index: any) => {
  index = position === 'before' ? index : index + 1
  props.stage.splice(index, 0, {
    name: '新串行'
  })
}

const handleRemoveParallel = (index: any) => {
  if (props.stage.length > 1) {
    props.stage.splice(index, 1)
  } else {
    emit('removeStage')
  }
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
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(38 38 38 / 10%);
    z-index: 2;

    > svg {
      width: 20px;
      height: 20px;
    }
  }

  .content-job {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    // position: absolute;
    // left: 50px;

    &:hover {
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
