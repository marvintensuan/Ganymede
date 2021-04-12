<template>
    <h1>Welcome, {{username}}!</h1>
</template>

<script>
export default {
    name: 'UCPWelcome',
    props: {
        username: String,
    }
}
</script>