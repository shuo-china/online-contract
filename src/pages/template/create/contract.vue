<template>
  <div class="wrapper">
    <div id="doc" class="doc">
      <!-- <pre>{{ JSON.stringify(data, null, 4) }}</pre> -->
      <render />
    </div>
  </div>
</template>

<script setup lang="ts">
import Render from '@/components/render/index.vue'
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
