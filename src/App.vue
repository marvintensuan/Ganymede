<template>
  <div class="container">
    <Header />
    <UserControlPanel username="Marvin"/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import UserControlPanel from './components/UserControlPanel'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    UserControlPanel,
    Footer
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
