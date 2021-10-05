<template>
  <main class="main">
    <h1 class="main-title h1-reset-default-style">Система онлайн бронирования отелей</h1>
    <section>
      <h2 class="catalog-title h2-reset-default-style">Каталог</h2>
      <Catalog />
    </section>
  </main>
</template>

<script>
  import Catalog from './Catalog.vue'

  export default {
    name: 'Main',
    components: {
      Catalog
    }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 1200px;
    margin: 0 auto;
  }

  .main-title {
    margin: 20px 0;
  }

  .catalog-title {
    margin: 20px 0;
  }
</style>
