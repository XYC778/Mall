<template>
<div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbaritem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  data() {
    return {
      // isActive:false
    };
  },
  computed:{
    isActive:{
      get(){
      return this.$route.path.indexOf(this.path) !== -1
      },
      set(){}
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },

  mounted() {
  },

  methods: {
    itemClick(){
      this.$router.push(this.path)
      this.isActive = !this.isActive
    }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>