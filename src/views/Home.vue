<template>
    <UserControlPanel v-bind:username='user' />
</template>

<script>
import UserControlPanel from '../components/UserControlPanel'

export default {
  name: 'Home',
  components: {
    UserControlPanel
  },
  data (){
    return {
      user: 'Marvin'
    }
  }
}
</script>
