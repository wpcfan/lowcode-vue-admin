<template>
    <div ref="el">
        <div v-for="item in list" :key="item.id">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
interface ListItemType {
    name: string;
    id: number;
    start: () => void;
    pause: () => void;
    resume: () => void;
    save: () => void;
}

import { ref } from 'vue';
import { useDraggable } from 'vue-draggable-plus';

const el = ref<HTMLElement | null>(null);

const list = ref<ListItemType[]>([
    { name: 'Joao', id: 1, start() { }, pause() { }, resume() { }, save() { } },
    { name: 'Jean', id: 2, start() { }, pause() { }, resume() { }, save() { } },
    { name: 'Johanna', id: 3, start() { }, pause() { }, resume() { }, save() { } },
    { name: 'Juan', id: 4, start() { }, pause() { }, resume() { }, save() { } },
]);
// 返回值是一个对象，包含了一些方法，比如 start、destroy、pause 等
const draggable = useDraggable<ListItemType>(el, list, {
    animation: 150,
    onStart() {
        console.log('start');
    },
    onUpdate() {
        console.log('update');
    }
});
</script>
