<template>
    <div class="about">
        <h1 @click="openToast">This is an about page {{ $route.params.id }}</h1>
        <h1>{{idA}}</h1>
    </div>
</template>
<script>
    export default {
        name: 'About',
        props: ['idA'],
        methods: {
            openToast () {
                // Toast('操作成功');
                // Indicator.open();
            }
        }
    }
</script>
