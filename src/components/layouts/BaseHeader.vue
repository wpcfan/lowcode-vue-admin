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
    <div class="flex-grow" />
    <!-- Right side: Profile and Theme Switcher -->
    <el-menu-item index="4">

      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar size="small" src="https://placehold.co/60x60"></el-avatar>
          <span class="ml-2">{{ userName }}</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Profile</el-dropdown-item>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>

    <!-- Theme Switcher -->
    <el-menu-item index="5" @click="toggleDark()">
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

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
