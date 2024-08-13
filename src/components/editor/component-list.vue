<template>
  <el-menu>
    <el-sub-menu v-for="category in componentCategories" :key="category.name" :index="category.name">
      <template #title>{{ category.name }}</template>
      <el-menu-item v-for="component in category.components" :key="component.name">
        <div @dragstart="startDrag(component)" draggable="true">{{ component.name }}</div>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      componentCategories: [
        { name: 'Basic', components: [{ name: 'Button' }, { name: 'Input' }] },
        { name: 'Layout', components: [{ name: 'Grid' }, { name: 'Form' }] },
      ],
    }
  },
  methods: {
    startDrag(component) {
      this.$emit('start-drag', component)
    },
  },
}
</script>
