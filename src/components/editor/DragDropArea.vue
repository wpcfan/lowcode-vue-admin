<template>
    <div class="drag-drop-area">
        <vuedraggable v-model="components" @end="onDrop">
            <template #item="{ element }">
                <div class="draggable-item">
                    {{ element.name }}
                </div>
            </template>
        </vuedraggable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const components = ref([])

const onDrop = (event) => {
    // 处理组件放置逻辑
}
</script>

<style scoped>
.drag-drop-area {
    border: 1px dashed #d3d3d3;
    padding: 20px;
    min-height: 400px;
}
</style>
