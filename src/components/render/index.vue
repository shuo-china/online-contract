<template>
  <div v-if="data">
    <!-- {{ JSON.stringify(data) }} -->
    <page v-for="item in data.pages" :key="item.key" :data="item" />
  </div>
</template>

<script setup lang="ts">
import Page from './page.vue'
import { useContractStore } from '@/store/contract'

const contractStore = useContractStore()
const data = contractStore.data
</script>
