<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="item.index" :class="{active: index === CurrentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabcontrol',
  props:{
    titles:{
      type:Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      CurrentIndex: 0
    };
  },

  mounted() {
    
  },

  methods: {
    itemClick(index){
      this.CurrentIndex = index
      this.$emit('tabClick', index)
    }
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 44px;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 19;
}
.tab-control-item {
  flex: 1;
  padding: 5px;
  font-size: 15px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>