<template>
  <div class="container">
    <Header />
    <UserControlPanel username="Marvin"/>
  </div>
</template>

<script>
import Header from './components/Header'
import UserControlPanel from './components/UserControlPanel'

export default {
  name: 'App',
  components: {
    Header,
    UserControlPanel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
