<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="hotpink">
        <img slot="item-icon" src="~assets/images/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="hotpink">
        <img slot="item-icon" src="~assets/images/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping" activeColor="hotpink">
        <img slot="item-icon" src="~assets/images/tabbar/shopping.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/shopping_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="hotpink">
        <img slot="item-icon" src="~assets/images/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'Tabbarmain',
  components:{
    TabBar,
    TabBarItem
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