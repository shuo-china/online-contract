<template>
  <div
    ref="el"
    class="control"
    :style="{
      transform: `translate(${data.x}px, ${data.y}px)`
    }"
  >
    <component :is="`c-${data.type}`" v-bind="data.props"></component>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { cloneDeep } from 'lodash'
import { useContractStore } from '@/store/contract'
import { handleXBoundary, handleYBoundary } from './util'
import type { ControlData, PageData } from '@/types'

const contractStore = useContractStore()

const props = defineProps<{
  data: ControlData
  pageData: PageData
}>()

const el = ref<HTMLDivElement | null>(null)

let mouseX, mouseY

const handleMouseMove = e => {
  const xDistance = e.pageX - mouseX
  const yDistance = e.pageY - mouseY

  const control = cloneDeep(props.data)

  control.x = handleXBoundary(
    control.x + xDistance,
    control.props,
    props.pageData
  )
  control.y = handleYBoundary(
    control.y + yDistance,
    control.props,
    props.pageData
  )

  mouseX = e.pageX
  mouseY = e.pageY

  contractStore.updateControl(props.pageData.key, control.key, control)
}

const addEventListenerAll = e => {
  if (el.value) {
    e.currentTarget.style.zIndex = 99
    mouseX = e.pageX
    mouseY = e.pageY
    el.value.addEventListener('mousemove', handleMouseMove)
    el.value.addEventListener('mouseup', removeEventListenerAll)
    el.value.addEventListener('mouseleave', removeEventListenerAll)
  }
}

const removeEventListenerAll = e => {
  if (el.value) {
    e.currentTarget.style.zIndex = 'auto'
    mouseX = mouseY = undefined
    el.value.removeEventListener('mousemove', handleMouseMove)
    el.value.removeEventListener('mouseup', removeEventListenerAll)
    el.value.removeEventListener('mouseleave', removeEventListenerAll)
  }
}

onMounted(() => {
  if (el.value) {
    el.value.addEventListener('mousedown', addEventListenerAll)
  }
})

onBeforeUnmount(() => {
  if (el.value) {
    el.value.removeEventListener('mousedown', addEventListenerAll)
  }
})
</script>

<style lang="scss" scoped>
.control {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
