<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',


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
.tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  box-shadow: 0 -2px 7px rgba(100,100,100,.2);
  text-align: center;
  background-color: #f6f6f6;
  z-index: 999;
}

</style>