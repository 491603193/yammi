<template>
    <div class="home">
        <x-header></x-header>



        <img alt="Vue logo" src="../assets/sys/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>



<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'home',
        components: {
            HelloWorld,
        }
    }
</script>
