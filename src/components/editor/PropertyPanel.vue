<template>
    <el-form :model="selectedComponentProps">
        <el-form-item label="Label" v-if="selectedComponentProps.label">
            <el-input v-model="selectedComponentProps.label"></el-input>
        </el-form-item>
        <el-form-item label="Placeholder" v-if="selectedComponentProps.placeholder">
            <el-input v-model="selectedComponentProps.placeholder"></el-input>
        </el-form-item>
        <!-- 其他属性项 -->
    </el-form>
</template>

<script setup>
import { reactive } from 'vue';

const selectedComponentProps = reactive({
    label: '',
    placeholder: '',
    // 其他属性
})
</script>
