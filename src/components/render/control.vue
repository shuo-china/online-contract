<template>
  <div
    ref="el"
    class="control"
    :style="{
      transform: `translate(${data.x}px, ${data.y}px)`
    }"
  >
    <div class="mask"></div>
    <component :is="`c-${data.type}`" v-bind="data.props"></component>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { cloneDeep } from 'lodash'
import { useContractStore } from '@/store/contract'
import type { ControlData } from '@/types'

const contractStore = useContractStore()

const props = defineProps<{
  data: ControlData
  pageKey: number
}>()

const el = ref<HTMLDivElement | null>(null)

let mouseX, mouseY

const handleMouseDown = e => {
  if (el.value) {
    mouseX = e.pageX
    mouseY = e.pageY
    el.value.addEventListener('mousemove', handleMouseMove)
  }
}

const handleMouseMove = e => {
  const control = cloneDeep(props.data)
  control.x = e.pageX - mouseX
  control.y = e.pageY - mouseY

  contractStore.updateControl(props.pageKey, control.key, control)
}

const handleMouseUp = e => {
  if (el.value) {
    el.value.removeEventListener('mousemove', handleMouseMove)
  }
}

onMounted(() => {
  if (el.value) {
    el.value.addEventListener('mousedown', handleMouseDown)
    el.value.addEventListener('mouseup', handleMouseUp)
  }
})

onBeforeUnmount(() => {
  if (el.value) {
    el.value.removeEventListener('mousedown', handleMouseDown)
    el.value.removeEventListener('mouseup', handleMouseUp)
  }
})
</script>

<style lang="scss" scoped>
.control {
  position: absolute;
  top: 0;
  left: 0;
}

.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  cursor: move;
}
</style>
