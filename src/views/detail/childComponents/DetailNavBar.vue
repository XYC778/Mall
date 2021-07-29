<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="goBack">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" @click="isCurrentIndex(index)" :class="{active: index === currentIndex}">
          {{item}}
      </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'Detailnavbar',
  components:{
    NavBar
  },


  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },

  mounted() {
    
  },

  methods: {
    isCurrentIndex(index) {
      this.currentIndex = index
    },
    goBack(){
      this.$router.back()
    }
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  border-bottom: 3px solid #f6f6f6;
}
.title {
  display: flex;
  color: #333;
}
.title-item {
  flex:1;
}
.active {
  color: var(--color-high-text);
}
.left {
  margin-top: 6px;
}
</style>