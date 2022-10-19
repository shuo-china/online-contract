<template>
  <div class="wrapper">
    <div id="doc" class="doc">
      <render v-model="data" />
      {{ JSON.stringify(data, null, 2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Render from '@/components/render/index.vue'
import rawData from '@/assets/data.json'
import { ref } from 'vue'

const data = ref(rawData)
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  background-color: #f1f1f1;

  .doc {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
