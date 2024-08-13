<template>
    <el-menu class="component-list" :default-openeds="['1', '2']">
        <el-sub-menu index="1">
            <template #title>Basic Components</template>
            <el-menu-item index="1-1" @click="selectComponent('Button')">Button</el-menu-item>
            <el-menu-item index="1-2" @click="selectComponent('Input')">Input</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>Advanced Components</template>
            <el-menu-item index="2-1" @click="selectComponent('Table')">Table</el-menu-item>
            <el-menu-item index="2-2" @click="selectComponent('Form')">Form</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
const selectComponent = (componentName) => {
    // 处理组件选择逻辑
}
</script>
