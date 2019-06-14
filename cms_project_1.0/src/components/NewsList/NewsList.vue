<template>
    <div class="newslist">
        <nav-head title="新闻资讯" />
        <div class="newscontent">
            <ul>  <!-- vnode -->
                <li v-for="(item,index) in newsarr" :key="index">
                    <router-link :to="{name:'newsdetail',query:{id:item.id}}">
                        <div class="newsimg">
                            <img :src="item.imgurl" alt="">
                        </div>
                        <div class="newstitle">
                            <h2>{{item.title}}</h2>
                            <span>{{item.quote}}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           newsarr:[
               {
                   id:1,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报'
               },
               {
                   id:2,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉'
               },
               {
                   id:3,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报'
               },
               {
                   id:4,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉'
               },
               {
                   id:5,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报'
               },
               {
                   id:6,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉'
               }
           ]
       }
   }
}
</script>

<style>
    .newscontent ul{margin: 10px;}
    .newscontent ul li{margin-bottom: 10px;}
    .newscontent ul a{display:block;overflow: hidden;}
    .newsimg{float:left;}
    .newsimg img{ width: 120px; }
    .newstitle{margin-left: 130px; margin-top: 10px;}
    .newstitle h2{ font-size: 16px;}
    .newstitle span{ font-size: 14px; color:#999;}
</style>
