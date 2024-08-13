<template>
  <div class="drag-drop-area" @drop="onDrop" @dragover.prevent>
    <div v-for="(component, index) in components" :key="index" @dragstart="startDrag(index)" draggable="true">
      <!-- 渲染组件 -->
      <component :is="component.name" v-bind="component.props" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [],
    }
  },
  methods: {
    onDrop(event) {
      const component = this.$emit('get-dragged-component')
      this.components.push({ name: component.name, props: {} })
    },
    startDrag(index) {
      this.draggingIndex = index
    },
  },
}
</script>
