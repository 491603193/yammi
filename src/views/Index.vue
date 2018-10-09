<template>
    <div>
        <x-header></x-header>
        <x-button type="primary" @click.native="processButton001">弹出提示框</x-button>
        <toast v-model="show" type="success" :time="2000" :is-show-mask="true" text="Hello World" :position="'bottom'"></toast>
    </div>
</template>

<script>
    import {XHeader,XButton,Toast  } from 'vux'
    export default {
        name: 'index',
        components: {
            XHeader,
            XButton,
            Toast
        },
        data() {
            return {
                show: false,
                position: 'bottom',
            };
        },
        methods: {
            processButton001 () {
                this.show = true;
            }
        }
    }
</script>