<template>
  <div ref="el" class="page" :style="styles">
    <img :src="data.img" />
    <div class="controls"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { PageData } from '@/types'

const props = defineProps<{
  data: PageData
}>()

const emit = defineEmits<{
  (e: 'update', value: PageData): void
}>()

const styles = computed(() => ({
  width: `${props.data.width}px`,
  height: `${props.data.height}px`
}))

const el = ref<HTMLDivElement | null>(null)

// 允许放置
const allowDrop = e => {
  e.preventDefault()
}

// 拖动被放置
const drop = e => {
  e.preventDefault()
  // 获取控件类型
  const controlType = e.dataTransfer.getData('control_type')
  emit('update', { ...props.data, width: 500 })
}

onMounted(() => {
  if (el.value) {
    el.value.addEventListener('dragover', allowDrop)
    el.value.addEventListener('drop', drop)
  }
})

onBeforeUnmount(() => {
  if (el.value) {
    el.value.removeEventListener('dragover', allowDrop)
    el.value.removeEventListener('drop', drop)
  }
})
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  margin: 16px 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .controls {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
