<template>
    <el-config-provider namespace="ep">
        <BaseHeader />
        <div class="flex main-container">
        <BaseSide />
        <div w="full" py="4">
            <router-view />
        </div>
        </div>
    </el-config-provider>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.main-container {
    height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
  
