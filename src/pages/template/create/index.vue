<template>
  <div class="container">
    <header>
      <toolbar />
    </header>
    <section>
      <main>
        <contract />
      </main>
      <aside width="240px">
        <slide />
      </aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import Toolbar from './toolbar.vue'
import Contract from './contract.vue'
import Slide from './slide.vue'
</script>

<style lang="scss" scoped>
$header-height: 60px;
$aside-width: 240px;

.container {
  width: 100%;
  height: 100%;

  header {
    box-sizing: border-box;
    height: $header-height;
    border-bottom: 1px solid #e9e9e9;
  }

  section {
    display: flex;
    min-height: calc(100vh - $header-height);

    main {
      flex: 1;
    }

    aside {
      flex: 0 0 $aside-width;
    }
  }
}
</style>
