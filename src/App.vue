<template>
    <div id="app" style="height:100%;">
        <keep-alive>
            <router-view/>
        </keep-alive>

    </div>
</template>

<script>
    export default {
        name: 'App',

        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    @import './style/base.css';
</style>
