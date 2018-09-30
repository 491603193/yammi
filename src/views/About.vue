<template>
    <div class="about">
        <h1 @click="openToast">This is an about page</h1>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    export default {
        name: 'About',
        methods: {
            openToast () {
                // Toast('操作成功');
                // Indicator.open();
            }
        }
    }
</script>
