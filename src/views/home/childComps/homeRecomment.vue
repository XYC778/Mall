<template>
  <div class="recommend">
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
  name: 'Homerecomment',
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
.recommend {
  width: 100%;
  height: 120px;
  display: flex;
  font-size: 12px;
  text-align: center;
  border-bottom:10px solid #eee;
  padding: 10px 0;
}
.recommend img {
  flex: 1;
  width: 65px;
  height: 65px;
  margin: 0 14px;
  margin-bottom: 10px;
}
</style>