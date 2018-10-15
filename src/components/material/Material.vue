<template>
    <div style="height: 100%;">
        <view-box ref="viewBox">
            <!--<x-header :right-options="{showMore: true}" @on-click-more="processButton001">This is the page title.</x-header>-->
            <x-button type="primary" @click.native="processButton001">弹出提示框</x-button>
            <x-button type="primary" @click.native="goToPage">路由</x-button>

            <toast v-model="show" type="text" :time="2000" :is-show-mask="true" text="Hello World"
                   :position="'middle'"></toast>
            <divider>我是有底线的</divider>
            <tab>
                <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
                <tab-item @on-item-click="onItemClick">未发货</tab-item>
                <tab-item @on-item-click="onItemClick">全部订单</tab-item>
            </tab>
            <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100"
                 @click="showPic(index)">
            <div v-transfer-dom>
                <previewer :list="list" ref="previewer" :options="options"
                           @on-index-change="logIndexChange"></previewer>
            </div>
            <div>
                <tab :line-width=2 active-color='#fc378c' v-model="index">
                    <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2"
                              @click="demo2 = item" :key="index">{{item}}
                    </tab-item>
                </tab>
                <swiper v-model="index" height="100px" :show-dots="false">
                    <swiper-item v-for="(item, index) in list2" :key="index">
                        <div class="tab-swiper vux-center">{{item}}{{index}} Container</div>
                    </swiper-item>
                </swiper>
            </div>

            <br/>
            <div class="box">
                <x-button @click.native="index=0" :disabled="index === 0" type="primary">go to 0</x-button>
                <x-button @click.native="index=1" :disabled="index === 1" type="primary">go to 1</x-button>

                <x-button @click.native="addTab" :disabled="list2.length === 5" type="primary">Add tab item</x-button>
                <x-button @click.native="removeTab" :disabled="list2.length <= 2" type="primary">Remove tab item
                </x-button>
                <x-button @click.native="next" type="primary">Active next current: {{index}}</x-button>
                <x-button @click.native="prev" type="primary">Active prev current: {{index}}</x-button>
            </div>
        </view-box>
    </div>
</template>

<script>
    import {
        XHeader, XButton, Toast, Divider, Tab, TabItem, Previewer, TransferDom,
        Sticky, Swiper, SwiperItem,ViewBox
    } from 'vux'

    const list = () => ['精选', '美食', '电影', '酒店', '外卖'];
    export default {
        name: 'Material',
        components: {
            XHeader, XButton, Toast, Divider, Tab, TabItem,
            Previewer, Sticky, Swiper, SwiperItem, ViewBox
        },
        directives: {
            TransferDom
        },
        data() {
            return {
                show: false,
                index: 0,
                list2: list(),
                demo2: '美食',
                list: [{
                    msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
                    src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
                    w: 800,
                    h: 400
                },
                    {
                        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
                        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
                        w: 1200,
                        h: 900
                    }, {
                        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
                        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
                    }],
                options: {
                    getThumbBoundsFn(index) {
                        // find thumbnail element
                        let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                        // get window scroll Y
                        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                        // optionally get horizontal scroll
                        // get position of element relative to viewport
                        let rect = thumbnail.getBoundingClientRect()
                        // w = width
                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                        // Good guide on how to get element coordinates:
                        // http://javascript.info/tutorial/coordinates
                    }
                }
            };
        },
        methods: {
            goToPage(){
                this.$router.push('/about/Material');
            },
            processButton001() {
                this.show = true;
            },
            onItemClick(index) {
                console.log('on item click:', index)
            },
            logIndexChange(arg) {
                console.log(arg)
            },
            showPic(index) {
                this.$refs.previewer.show(index)
            },
            onItemClick(index) {
                console.log('on item click:', index)
            },
            addTab() {
                if (this.list2.length < 5) {
                    this.list2 = list().slice(0, this.list2.length + 1)
                }
            },
            removeTab() {
                if (this.list2.length > 1) {
                    this.list2 = list().slice(0, this.list2.length - 1)
                }
            },
            next() {
                if (this.index === this.list2.length - 1) {
                    this.index = 0
                } else {
                    ++this.index
                }
            },
            prev() {
                if (this.index === 0) {
                    this.index = this.list2.length - 1
                } else {
                    --this.index
                }
            }
        }
    }
</script>
<style>
    .tab-swiper {
        background-color: #fff;
        height: 100px;
    }
</style>