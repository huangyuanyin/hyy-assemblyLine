<template>
  <div class="Variable-wrap">
    <header class="header">
      <div class="header__text">变量</div>
      <div class="header__desc">通过定义环境变量实现流水线过程定制化，可以在执行过程的任何阶段使用这些变量。<span class="header__link">查看文档</span></div>
    </header>
    <div class="title">字符变量</div>
    <div class="next-form-item">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="变量名称" width="180" />
        <el-table-column prop="name" label="默认值" width="250" />
        <el-table-column prop="address" label="私密模式">
          <template slot="header" #header="scope">
            <div class="item-top">
              <span>私密模式</span>
              <el-tooltip class="item" effect="dark" content="私密模式控制变量是香对外公开。当变量设苦为私密模式后,将无法查看娈量的值" placement="top">
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <template #default>
            <el-switch v-model="value" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="运行时设置">
          <template slot="header" #header="scope">
            <div class="item-top">
              <span>运行时设置</span>
              <el-tooltip
                class="item"
                effect="dark"
                content="运行时设置控制变量值是杏需要在流水线运行时设置。当变量设置为运行时设置后,流水线运行时需要设置变量的值"
                placement="top"
              >
                <el-icon><QuestionFilled /></el-icon>
              </el-tooltip>
            </div>
          </template>
          <template #default>
            <el-switch v-model="settingValue" />
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template #default>
            <el-button link type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="title">运行选择变量</div>
    <div class="next-form-item">
      <el-table :data="runVariableTableData" border style="width: 100%" empty-text="暂无数据">
        <el-table-column prop="date" label="变量名称" width="180" />
        <el-table-column prop="name" label="默认值" width="250" />
        <el-table-column prop="name" label="选项" width="250" />
        <el-table-column prop="address" label="操作">
          <template #default>
            <el-button link type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { QuestionFilled } from '@element-plus/icons-vue'

const tableData = [
  {
    date: 'ECS_IP',
    name: '注意：请输入体验主机公网IP！'
  }
]
const runVariableTableData = ref([])
const value = ref(false)
const settingValue = ref(true)

const renderHeader = (h: any, column: any, describe: any) => {
  console.log(`output->column`, column)
  return h('div', { class: 'display: flex' }, [
    h('i', {
      class: 'required p_r5'
    }),
    h('span', column.label),
    h(
      'el-tooltip',
      {
        props: {
          content: describe,
          placement: 'right'
        }
      },
      [
        h('i', {
          class: 'icon-tip nav-icon m_l10'
        })
      ]
    )
  ])
}
</script>

<style lang="scss" scoped>
.Variable-wrap {
  .header {
    width: calc(100% + 38px);
    margin-left: -19px;
    padding: 17px 0 17px 17px;
    border-bottom: 1px solid #e9edf0;
    .header__text {
      font-size: 16px;
      color: #292929;
      font-weight: 550;
      margin-bottom: 4px;
    }
    .header__desc {
      font-size: 14px;
      color: #8b8b8b;
      .header__link {
        color: #1b9aee;
        cursor: pointer;
        margin-left: 3px;
      }
    }
  }
  .title {
    padding: 16px 0;
    color: #292929;
    font-size: 14px;
    font-weight: 500;
  }
  .next-form-item {
    :deep(.el-table .el-table__cell) {
      padding: 8px 10px;
    }
    .el-input-group__append .el-button {
      font-size: 16px;
      &:hover {
        color: #1b9aee;
      }
    }
  }
}
</style>
