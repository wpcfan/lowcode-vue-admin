<template>
  <el-row>
    <el-button @click="undo">Undo</el-button>
    <el-button @click="redo">Redo</el-button>
    <el-button @click="preview">Preview</el-button>
    <el-button @click="toggleLayout">Switch Layout</el-button>
  </el-row>
</template>

<script>
export default {
  methods: {
    undo() { },
    redo() { },
    preview() { },
    toggleLayout() { },
  },
}
</script>
