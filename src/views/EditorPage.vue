<template>
    <div class="visual-editor">
        <ComponentList class="left-panel" />
        <div class="center-panel">
            <Toolbar />
            <DragDropArea />
        </div>
        <PropertiesPanel class="right-panel" />
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.visual-editor {
    display: flex;
}

.left-panel {
    width: 20%;
    border-right: 1px solid #ebeef5;
}

.center-panel {
    flex: 1;
    padding: 0 20px;
}

.right-panel {
    width: 25%;
    border-left: 1px solid #ebeef5;
}
</style>
