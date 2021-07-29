<template>
  <div id="app">
    <!-- 路由不销毁 -->
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
    <tab-bar-main></tab-bar-main>
  </div>
</template>
<script>
import TabBarMain from 'components/content/TabBarMain/TabBarMain.vue'
export default {
  components: {
    TabBarMain
  }
}
</script>
<style lang="scss">
@import "assets/css/base.css";
</style>
