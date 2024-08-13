<template>
    <footer class="footer">
        <p>© {{ currentYear }} fangxiaoer.com. All rights reserved.</p>
    </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 获取当前年份
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
    text-align: center;
    padding: 1rem;
    background-color: #f8f9fa;
    color: #6c757d;
}

.footer p {
    margin: 0;
}
</style>
