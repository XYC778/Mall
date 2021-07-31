<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">
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
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },

  mounted() {
    
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index);
    }
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  position: sticky;
  top: 88px;
  background-color: #fff;
  height: 50px;
}
.tab-control-item {
  flex: 1;
  margin: 10px 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding-bottom: 5px;
}
</style>