<template>
    <div class="about">
        <x-header :right-options="{showMore: true}" @on-click-more="processButton001">This is the page title.</x-header>
        <h1 @click="openToast">This is an about page{{i}}</h1>
    </div>
</template>
<script>
    import { XHeader } from 'vux'
    export default {
        name: 'About',
        components:{
            XHeader
        },
        methods: {
            openToast () {
                // Toast('操作成功');
                // Indicator.open();
            }
        }
    }
</script>
