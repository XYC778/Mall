<template>
  <div class="goods-item">
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goodsitem',
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
  float: left;
}
.goods-item img {
  width: 100%;
  height: 258px;
  border-radius: 10px;
  margin: 10px 14px;
  padding: 0 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left: 0;
  text-align: center;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
  padding: 0 5px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>