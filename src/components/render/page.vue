<template>
  <div ref="el" class="page" :style="styles">
    <img :src="data.img" />
    <div class="controls">
      <control
        v-for="item in data.controls"
        :key="item.key"
        :page-data="data"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Control from './control.vue'
import { useContractStore } from '@/store/contract'
import { calcX, calcY } from './util'
import { ControlItems } from '@/constants'
import type { PageData } from '@/types'

const contractStore = useContractStore()

const props = defineProps<{
  data: PageData
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
  // 获取控件初始参数
  const controlProps = ControlItems[controlType]?.props

  if (!controlProps) return

  // 添加控件
  const control = {
    key: props.data.controls.length
      ? props.data.controls.slice(-1)[0].key + 1
      : 1,
    type: controlType,
    x: calcX(e, controlProps, props.data),
    y: calcY(e, controlProps, props.data),
    props: controlProps
  }

  contractStore.addControl(props.data.key, control)
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
    user-select: none;
  }

  .controls {
    user-select: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
