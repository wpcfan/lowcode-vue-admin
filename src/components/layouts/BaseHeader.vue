<script lang="ts" setup>
import logo from "~/assets/logo.png";
import { toggleDark } from "~/composables";

const userName = "John Doe"; // Replace with actual dynamic user data
</script>

<template>
    <el-menu mode="horizontal" :ellipsis="false">
        <!-- Left side: Title and Logo -->
        <el-menu-item index="1">
            <img :src="logo" alt="Logo" style="height: 24px;" />
            <span class="ml-2">运营页面管理系统</span>
        </el-menu-item>
        <!-- Right side: Profile and Theme Switcher -->
        <div class="flex-grow"></div>
        <el-sub-menu index="2">
            <template #title>
                <span class="el-dropdown-link">
                    <el-avatar size="small" src="https://placehold.co/60x60"></el-avatar>
                    <span class="ml-2">{{ userName }}</span>
                </span>
            </template>
            <el-menu-item index="2-1">Profile</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">Logout</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <!-- Theme Switcher -->
        <el-menu-item index="2" @click="toggleDark()">
            <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height)">
                <i inline-flex i="dark:ep-moon ep-sunny" />
            </button>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>
