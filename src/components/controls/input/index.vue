<template>
  <div>
    <el-input :input-style="styles" v-bind="attrs">input</el-input>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const props = defineProps<{
  width: number
  height: number
}>()

const styles = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`
}))

const attrs = useAttrs()
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  padding: 0;
}
</style>
