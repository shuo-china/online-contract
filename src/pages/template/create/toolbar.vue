<template>
  <div class="wrapper">
    <ul id="controls">
      <li
        v-for="item in controlItems"
        :id="item.id"
        :key="item.id"
        draggable="true"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ControlItems } from '@/constants'

const controlItems = Object.entries(ControlItems).map(([k, v]) => ({
  id: k,
  name: v.name
}))

onMounted(() => {
  const els = document.querySelectorAll('#controls li')
  els.forEach(el => {
    el.addEventListener('dragstart', (e: any) => {
      e.dataTransfer.setData('control_type', e.target.id)
    })
  })
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 24px;

  ul {
    display: flex;
    gap: 16px;
    list-style: none;

    li {
      padding: 12px;
      background-color: rgba(0 0 0 / 10%);
    }
  }
}
</style>
