<template>
    <div style="height:100%;">
        <keep-alive>
            <component v-bind:is="currentTabComponent"/>
        </keep-alive>
        <tabbar @on-index-change="itemClick">
            <tabbar-item selected>
                <img slot="icon" src="../assets/indexBottom/product.png">
                <img slot="icon-active" src="../assets/indexBottom/product_select.png">
                <span slot="label">产品</span>
            </tabbar-item>
            <tabbar-item show-dot>
                <img slot="icon" src="../assets/indexBottom/study.png">
                <img slot="icon-active" src="../assets/indexBottom/study_select.png">
                <span slot="label">育儿课</span>
            </tabbar-item>
            <tabbar-item>
                <img slot="icon" src="../assets/indexBottom/message.png">
                <img slot="icon-active" src="../assets/indexBottom/message_select.png">
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item badge="2" >
                <img slot="icon" src="../assets/indexBottom/center.png">
                <img slot="icon-active" src="../assets/indexBottom/center_select.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import {Tabbar, TabbarItem, XHeader} from 'vux'
    import Material from '@/components/material/Material.vue'
    import About from '@/components/About.vue'
    import ProductList from '@/components/product/ProductList.vue'

    const height = document.documentElement.clientHeight || document.body.clientHeight;
    const tabs = ["ProductList","Material"];

    export default {
        name: "index",
        data() {
            return {
                currentTabComponent:tabs[0],
                value:"",
                index: 0,
                height: height-53+"px"
            }
        },
        components: {
            Tabbar, TabbarItem,Material,About,ProductList,XHeader
        },
        methods:{
            itemClick(badge){
                this.index = badge;
                this.currentTabComponent= tabs[this.index];
            }
        }
    }
</script>
<style>
    .view-box {
        position: absolute
    }
</style>