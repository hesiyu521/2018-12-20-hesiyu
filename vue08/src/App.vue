<template>
  <div id="app">
    <hr>
    <List></List>
    <hr>
    <Shopcar></Shopcar>
  </div>
</template>

<script>
  import List  from './List.vue'
  import Shopcar from './Shopcar.vue'
export default {
  name: 'App',
  components:{List,Shopcar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
