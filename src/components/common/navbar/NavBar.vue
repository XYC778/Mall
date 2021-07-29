<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

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
.nav-bar {
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  font-size: 16px;
}
.left,.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>