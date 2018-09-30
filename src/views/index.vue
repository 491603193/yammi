<template>
    <div>
        <div>
            <div class="page-tab-container">
                <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                    <mt-tab-container-item id="tab-container1">
                        <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
                            <router-link to="/" slot="left">
                                <mt-button icon="back">返回</mt-button>
                            </router-link>
                            <mt-button icon="more" slot="right"></mt-button>
                        </mt-header>
                        <productList/>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container2">
                        <HelloWorld msg="Welcome to Your Vue.js App"/>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                        333333333333333333333333333333333333
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>
        <div id="nav">
            <div @click="active = 'tab-container1'">首页</div>
            <div @click="active = 'tab-container2'">首页</div>
            <div @click="active = 'tab-container3'">首页</div>
            <div @click="active = 'tab-container3'">首页</div>
        </div>
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue'
    import productList from '../components/product/productList.vue'

    export default {
        name: 'index',
        components: {
            HelloWorld,
            productList
        },
        data() {
            return {
                active: 'tab-container1',
                tabContainer: {
                    swipeable: true
                }
            }
        },
        methods: {
            openToast(index) {
                // Toast('操作成功');
                // Indicator.open();
            }
        }
    }
</script>

<style>

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
