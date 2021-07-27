<template>
  <div class="goods-list">
    <goods-item v-for="item in goods" :key="item.index" :goodsitem="item">
    </goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
  name: 'Goodslist',
  components:{
    GoodsItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
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
</style>