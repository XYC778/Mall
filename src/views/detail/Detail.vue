<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <param-info :paramInfo="paramInfo"></param-info>
      <detail-comment-info :commentInfo=" commentInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue'
import DetailSwiper from'./childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import ParamInfo from './childComponents/ParamInfo.vue'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'

import Scroll from 'components/common/scroll/Scroll.vue'

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'
export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    ParamInfo,
    DetailCommentInfo
  },


  data() {
    return {
      id:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{}
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
  created(){
    //保存传入的iid
    this.id = this.$route.params.id

    //根据iid请求详情数据
    getDetail(this.id).then(res=>{
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      //店铺信息
      this.shop = new Shop(data.shopInfo)

      //获取商品详情数据
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 获取评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  z-index: 999;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>