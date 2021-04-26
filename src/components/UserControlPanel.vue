<template>
    <UCPWelcome :username='username'/>
</template>

<script>
import UCPWelcome from './UCP/UCPWelcome'

export default {
    name: 'UserControlPanel',
    components: {
        UCPWelcome,
    },
    props: {
        username: String
    }
}
</script>