<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages" :key="item.index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'Detailswiper',
  props:{
    topImages:Array,
    default(){
      return []
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

<style lang="scss" scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>