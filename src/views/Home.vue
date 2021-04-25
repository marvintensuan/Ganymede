<template>
    <UserControlPanel v-bind:username='user' />
    <EventsPane />
</template>

<script>
import UserControlPanel from '../components/UserControlPanel'
import EventsPane from '../components/EventsPane'

export default {
  name: 'Home',
  components: {
    UserControlPanel,
    EventsPane
  },
  data (){
    return {
      user: 'Marvin'
    }
  }
}
</script>
