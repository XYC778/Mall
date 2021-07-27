<template>
  <div class="wrapper">
    <ul class="content">
      <li>1哈哈</li>
      <li>2哈哈</li>
      <li>3哈哈</li>
      <li>4哈哈</li>
      <li>5哈哈</li>
      <li>6哈哈</li>
      <li>7哈哈</li>
      <li>8哈哈</li>
      <li>9哈哈</li>
      <li>10哈哈</li>
      <li>11哈哈</li>
      <li>12哈哈</li>
      <li>13哈哈</li>
      <li>14哈哈</li>
      <li>15哈哈</li>
      <li>16哈哈</li>
      <li>17哈哈</li>
      <li>18哈哈</li>
      <li>19哈哈</li>
      <li>20哈哈</li>
      <li>21哈哈</li>
      <li>22哈哈</li>
      <li>23哈哈</li>
      <li>24哈哈</li>
      <li>25哈哈</li>
      <li>26哈哈</li>
      <li>27哈哈</li>
      <li>28哈哈</li>
      <li>29哈哈</li>
      <li>30哈哈</li>
      <li>31哈哈</li>
      <li>32哈哈</li>
      <li>33哈哈</li>
      <li>34哈哈</li>
      <li>35哈哈</li>
      <li>36哈哈</li>
      <li>37哈哈</li>
      <li>38哈哈</li>
      <li>39哈哈</li>
      <li>40哈哈</li>
      <li>41哈哈</li>
      <li>42哈哈</li>
      <li>43哈哈</li>
      <li>44哈哈</li>
      <li>45哈哈</li>
      <li>46哈哈</li>
      <li>47哈哈</li>
      <li>48哈哈</li>
      <li>49哈哈</li>
      <li>50哈哈</li>
      <li>51哈哈</li>
      <li>52哈哈</li>
      <li>53哈哈</li>
      <li>54哈哈</li>
      <li>55哈哈</li>
      <li>56哈哈</li>
      <li>57哈哈</li>
      <li>58哈哈</li>
      <li>59哈哈</li>
      <li>60哈哈</li>
      <li>61哈哈</li>
      <li>62哈哈</li>
      <li>63哈哈</li>
      <li>64哈哈</li>
      <li>65哈哈</li>
      <li>66哈哈</li>
      <li>67哈哈</li>
      <li>68哈哈</li>
      <li>69哈哈</li>
      <li>70哈哈</li>
      <li>71哈哈</li>
      <li>72哈哈</li>
      <li>73哈哈</li>
      <li>74哈哈</li>
      <li>75哈哈</li>
      <li>76哈哈</li>
      <li>77哈哈</li>
      <li>78哈哈</li>
      <li>79哈哈</li>
      <li>80哈哈</li>
      <li>81哈哈</li>
      <li>82哈哈</li>
      <li>83哈哈</li>
      <li>84哈哈</li>
      <li>85哈哈</li>
      <li>86哈哈</li>
      <li>87哈哈</li>
      <li>88哈哈</li>
      <li>89哈哈</li>
      <li>90哈哈</li>
      <li>91哈哈</li>
      <li>92哈哈</li>
      <li>93哈哈</li>
      <li>94哈哈</li>
      <li>95哈哈</li>
      <li>96哈哈</li>
      <li>97哈哈</li>
      <li>98哈哈</li>
      <li>99哈哈</li>
      <li>100哈哈</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'TabCategory',

  data() {
    return {
      bscroll:null
    };
  },

  mounted() {
    this.bscroll =  new BScroll('.wrapper',{
      probeType: 3,
      pullUpLoad:true
    })
    this.bscroll.on('scroll',(postion)=>{
      // console.log(postion);
    })
    this.bscroll.on('pullingUp',()=>{
      console.log('上拉加载更多');

    })

  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  height: 150px;
  background-color: pink;
  overflow: hidden;
}
</style>