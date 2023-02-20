<template>
  <div class="basicInformation-wrap">
    <el-card shadow="never">
      <div class="header">
        <span>流水线信息</span>
      </div>
      <div class="content">
        <el-form
          ref="basicInformationFormRef"
          :model="basicInformationForm"
          :rules="basicInformationRules"
          label-width="120px"
          class="basicInformation-ruleForm"
          size="default"
          label-position="top"
          style="max-width: 560px"
          status-icon
        >
          <el-form-item label="流水线名称">
            <el-input v-model="basicInformationForm.name" placeholder="请输入流水线名称..." />
          </el-form-item>
          <el-form-item label="流水线ID">
            <el-input v-model="basicInformationForm.id" placeholder="Please input" disabled>
              <template #append>
                <el-button :icon="CopyDocument" v-copy="basicInformationForm.id"></el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="环境">
            <el-select v-model="basicInformationForm.environment" placeholder="">
              <el-option :label="item.label" :value="item.value" v-for="(item, index) in environmentList" :key="'environmentList' + index" />
            </el-select>
          </el-form-item>
          <el-form-item label="分组">
            <el-select v-model="basicInformationForm.group" placeholder="0">
              <el-option :label="item.label" :value="item.value" v-for="(item, index) in groupList" :key="'groupList' + index" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="resetForm(basicInformationFormRef)">删除任务</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { CopyDocument } from '@element-plus/icons-vue'

const environmentList = ref([
  { label: '无', value: 'no' },
  { label: '日常环境', value: 'daily' },
  { label: '预发环境', value: 'advance' },
  { label: '正式环境', value: 'formal' }
])
const groupList = ref([{ label: '无选项', value: 'no' }])
const basicInformationFormRef = ref<FormInstance>()
const basicInformationForm = reactive({
  name: '',
  id: 'xc5977k9cnumqdow',
  environment: 'no',
  group: ''
})
const basicInformationRules = reactive<FormRules>({
  name: [{ required: true, message: '请输入流水线名称...', trigger: 'blur' }],
  environment: [{ required: true, message: '请选择环境', trigger: 'change' }],
  group: [{ required: true, message: '请选择分组', trigger: 'change' }]
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.basicInformation-wrap {
  background-color: #f2f5f7;
  height: calc(100vh - 93px);
  max-width: 100%;
  padding: 20px 120px 0 120px;
  :deep(.el-card__body) {
    padding: 0px;
  }
  .el-card {
    width: 80%;
    margin: 0 auto;
    height: calc(100% - 20px);
  }
  .header {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #e9edf0;
    span {
      padding-left: 17px;
      font-size: 16px;
      color: #292929;
      font-weight: 500;
    }
  }
  .content {
    padding: 30px 40px 0 17px;
    .basicInformation-ruleForm {
      .el-input-group__append .el-button {
        font-size: 16px;
        &:hover {
          color: #1b9aee;
        }
      }
    }
  }
}
</style>
