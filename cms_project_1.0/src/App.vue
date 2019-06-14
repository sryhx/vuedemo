<template>
  <div id="myapp">
    <mt-header fixed title="信息管理系统"></mt-header>
    <router-view />
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/home.png" @click="fn('home')">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="" @click="fn('vip')">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="" @click="fn('shopcart')">
        购物车
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="" @click="fn('my')">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: 'home'
    }
  },
  /* watch: {
    selected (newv, oldv) {
      console.log(newv, oldv)
      this.$router.push({name: this.selected})
    }
  } */
  methods:{
    fn(arg){
        this.selected=arg;
        this.$router.push({name: this.selected})
    }
  }
}
</script>

<style>
  .box{
    height: 1000px;
    border:1px solid red;
  }
  #myapp{
    margin:40px 0 55px 0px;
  }
</style>
