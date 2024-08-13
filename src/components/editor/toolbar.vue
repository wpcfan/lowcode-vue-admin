<template>
    <div class="toolbar">
        <el-button icon="el-icon-refresh" @click="undo">Undo</el-button>
        <el-button icon="el-icon-refresh-right" @click="redo">Redo</el-button>
        <el-button icon="el-icon-view" @click="preview">Preview</el-button>
        <el-button icon="el-icon-s-platform" @click="toggleLayout">Switch Layout</el-button>
    </div>
</template>

<script setup>
const undo = () => {
    // 撤销逻辑
}

const redo = () => {
    // 重做逻辑
}

const preview = () => {
    // 预览逻辑
}

const toggleLayout = () => {
    // 切换布局逻辑
}
</script>

<style scoped>
.toolbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
</style>
