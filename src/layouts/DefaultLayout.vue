<template>
    <el-config-provider namespace="ep">
        <el-header>
            <BaseHeader />
        </el-header>
        <el-container class="main-container">
            <el-aside>
                <BaseSide />
            </el-aside>
            <el-container>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-config-provider>
</template>

<script setup>

</script>

<style>
.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
