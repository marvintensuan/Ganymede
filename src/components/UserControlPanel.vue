<template>
    <h1>Welcome, {{username}}!</h1>
</template>

<script>
export default {
    name: 'UserControlPanel',
    props: {
        username: String,
    }
}
</script>