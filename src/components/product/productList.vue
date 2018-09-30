<template>
    <div class="goods-list" v-bind:class="{'hide-flow': classShow}">
        <div class="blank"></div>
        <ul>
            <li v-for="(index,entity) in entities" :key="entity.productId" @click="openGoodsDetail(entity.productId)">
                <div class="horizontal">
                    <img :src="entity.loadingImage==='none'? loadingImg : entity.loadingImage" alt="">
                    <div class="flex-1">
                        <div class="title ellipsis">{{entity.productName}}</div>
                        <div class="detail">{{entity.description}}</div>
                        <div class="address-wrap ellipsis">
                            <span class="place ellipsis" v-if="!!entity.place">{{entity.place}}</span>
                            <span class="" v-if="!!entity.salesHeat"> &nbsp; &nbsp; 销量: {{entity.salesHeat}}</span>
                            <span class="" style="float: right;">单价 {{entity.showPrice/entity.productNum}}元</span>
                        </div>
                        <div class="money-wrap ellipsis" style="">
                            <span class="color-red">¥<span class="money">{{entity.showPrice}}</span></span>
                            <span class="line-through">建议价 {{entity.classDPrice}}元</span>
                        </div>
                    </div>
                </div>
            </li>
            <div class="no_line color-999" v-show="no_line">
                <span>没有更多商品了</span>
            </div>
        </ul>
    </div>
</template>
<script>
    import entities from 'entities';
    export default {
        name: "product-list",
        data() {
            return {
                no_line: false,
                classShow: false,
                entities: entities
            };
        }
    }
</script>

<style scoped>
    .goods-list {
    }
    .goods-list ul {
        background-color: #fff;
    }
    .goods-list li {
        border-bottom: 1px solid #d5d5d5;
        padding: 2.67% 4%;
    }
    .goods-list li>.horizontal {
        height: 100px;
    }
    .goods-list ul li:last-of-type {
        border-bottom: 0;
    }
    .goods-list li img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right: 10px;
    }
    .goods-list .btn {
        width: 34%;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        border-radius: 4px;
    }

    .goods-list .address-wrap {
        font-size: 11px;
        color: #999;
        line-height: 20px;
        padding-top: 6px;
        display: flex;
        justify-content: space-between;
    }
</style>