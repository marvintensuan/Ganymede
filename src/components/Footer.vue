<template>
    <footer>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col"><router-link to='/'>Home</router-link></div>
                <div class="col"><router-link to='/about'>About</router-link></div>
                <div class="col"><router-link to='/donate'>Donate</router-link></div>
                <div class="col-sm-4"></div>
            </div>
            <div class="text-center mt-3">
                © 2021 Copyright
            </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    footer{
        background-color: #004D40;
        color: white;
        min-width: 100%;
        position: absolute;
        bottom: 0;
        height: 15%;
    }
    a{
        color: white;
    }
</style>