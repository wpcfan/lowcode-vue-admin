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

<style>
  
</style>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseSide from '@/components/BaseSide.vue';
</script>