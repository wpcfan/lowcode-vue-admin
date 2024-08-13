<template>
  <div v-if="selectedComponent">
    <div v-for="(value, prop) in selectedComponent.props" :key="prop">
      <el-input v-model="selectedComponent.props[prop]" :label="prop" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedComponent'],
}
</script>
