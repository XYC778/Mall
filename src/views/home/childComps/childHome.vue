<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link"></a>
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper,SwiperItem } from '../../../components/common/swiper/index'
export default {
  name: 'Childhome',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    SwiperItem,
    Swiper
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

<style scoped>

</style>