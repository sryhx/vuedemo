<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in bannerimg" :key="index">
        <img :src="item" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="homeNav">
      <ul>
        <li v-for="(item,index) in uldata" :key="index">
          <router-link :to="{name:item.luyou}">
            <span><img :src="item.imgsrc" alt=""></span>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      bannerimg:[
        require('../../assets/a.jpg'),
        require('../../assets/b.jpg'),
        require('../../assets/c.jpg'),
        require('../../assets/a.jpg')
        ],
       uldata:[
          {
            imgsrc:require('../../assets/news2.png'),
            title:'新闻资讯',
            luyou:'newslist'
          },
          {
            imgsrc:require('../../assets/topic_share.png'),
            title:'图文分享',
            luyou:'newslist'
          },
          {
            imgsrc:require('../../assets/goodsShow.png'),
            title:'商品展示',
            luyou:'newslist'
          },
          {
            imgsrc:require('../../assets/feedback.png'),
            title:'反馈留言',
            luyou:'newslist'
          },
          {
            imgsrc:require('../../assets/search.png'),
            title:'搜索资讯',
            luyou:'newslist'
          },
          {
            imgsrc:require('../../assets/callme.png'),
            title:'联系我们',
            luyou:'newslist'
          }
       ] 
    };
  }
};
</script>

<style scoped>
.mint-swipe{
  height: 200px;
}
.homeNav{ margin-top: 10px;}
.homeNav ul{overflow: hidden;}
.homeNav li{ float: left; width: 33.3%; text-align: center; margin-bottom: 10px;}
.homeNav li span{display: block;}
.homeNav li span img{ width: 40px; height: 40px;}
</style>
