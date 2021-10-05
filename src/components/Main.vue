<template>
  <main class="main">
    <h1 class="main-title h1-reset-default-style">Система онлайн бронирования отелей</h1>
    <router-view/>
  </main>
</template>

<script>
  export default {
    name: 'Main',
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
</style>
