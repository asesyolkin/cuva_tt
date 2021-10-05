<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  .h1-reset-default-style,
  .h2-reset-default-style,
  .h3-reset-default-style,
  .p-reset-default-style,
  .a-reset-default-style,
  .ul-reset-default-style {
    margin: 0;
    padding: 0;
  }

  .a-reset-default-style {
    color: black;

    text-decoration: none;
  }

  .ul-reset-default-style {
    list-style: none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
