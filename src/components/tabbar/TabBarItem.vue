/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  components:{
    
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  data() {
    return {
      // isActive:true
    };
  },

  mounted() {
    
  },

  methods: {
    itemClick(){
      this.$router.push(this.path).catch(()=>{})
    }
  },
  computed:{
    isActive(){
      // return this.$route.path.indexOf(this.path) !== -1
      //判断isActive是否处于活跃
      return this.$route.path == this.path
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }

  }
};
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
  color: pink;
}
</style>