<template>
  <page
    v-for="item in modelValue.pages"
    :key="item.page"
    :data="item"
    @update="handlePageUpdate"
  />
</template>

<script setup lang="ts">
import Page from './page.vue'
import type { ContractData, PageData } from '@/types'
import { toRaw } from 'vue'

const props = defineProps<{
  modelValue: ContractData
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ContractData): void
}>()

const handlePageUpdate = (value: PageData) => {
  let idx = props.modelValue.pages.findIndex(item => item.page === value.page)
  if (idx !== -1) {
    const data = { ...toRaw(props.modelValue) }
    data.pages[idx] = value

    emit('update:modelValue', data)
  }
}
</script>
