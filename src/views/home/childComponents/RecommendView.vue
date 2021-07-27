<template>
  <div class="recommends-view">
    <div v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommendview',
  props:{
    recommends:{
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
.recommends-view {
  display: flex;
  padding: 15px 5px;
  text-align: center;
  border-bottom: 10px solid #eee;
}
.recommends-view img {
  flex: 1;
  width: 75px;
  height: 75px;
  margin: 0 8px;
}
</style>