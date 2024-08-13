<template>
  <el-container>
    <el-aside width="250px">
      <!-- 左侧组件列表 -->
      <component-list />
    </el-aside>

    <el-container>
      <el-header>
        <!-- 工具栏 -->
        <tool-bar />
      </el-header>

      <el-main>
        <!-- 中间拖放区 -->
        <drag-drop-area />
      </el-main>
    </el-container>

    <el-aside width="300px">
      <!-- 右侧属性设置区 -->
      <property-panel />
    </el-aside>
  </el-container>
</template>
<script setup>
import { ComponentList, DragDropArea, PropertyPanel, ToolBar } from '~/components/editor';
</script>
