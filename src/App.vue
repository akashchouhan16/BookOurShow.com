<template>
  <div id="app">
    <HeaderComponent/>
    <MainComponent/>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<style>
#app {
  font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
