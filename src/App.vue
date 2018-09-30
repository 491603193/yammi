<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'About',
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

    #nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #3fa2fe;
    }

    #nav div {
        text-align: center;
        width: 60px;
        height: 30px;
        background: lightcoral;
    }
</style>
