<template>
    <div>
         <nav-head title="新闻详情" />
         <div class="newsdetail-title">
             <h1>{{newsarr[num].title}}</h1>
             <p>
                 <span>{{newsarr[num].quote}}</span>
                 <span>{{newsarr[num].addTime | convertTime('YYYY-MM-DD')}}</span>
             </p>
         </div>
         <div class="newsdetail-content">
             {{newsarr[num].content}}
             <img :src="newsarr[num].imgurl">
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:0,
            newsarr:[
               {
                   id:1,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报',
                   content:'aaaaaa',
                   addTime:new Date()
               },
               {
                   id:2,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉',
                   content:'bbbbb',
                   addTime:new Date()
               },
               {
                   id:3,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报',
                   content:'aaaaaa',
                   addTime:new Date()
               },
               {
                   id:4,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉',
                   content:'bbbbb',
                   addTime:new Date()
               },
               {
                   id:5,
                   imgurl:require("../../assets/news1.jpg"),
                   title:"不可靠实体清单来了 哪些实体会进'黑名单'",
                   quote:'新京报',
                   content:'aaaaaa',
                   addTime:new Date()
               },
               {
                   id:6,
                   imgurl:require("../../assets/news2.jpg"),
                   title:"一个月内连失两高管、亏损持续加剧，趣头条日子不好过",
                   quote:'龚进辉',
                   content:'bbbbb',
                   addTime:new Date()
               }
           ]
        }
    },
    mounted(){
        this.num=this.$route.query.id-1;
        console.log(this.num);
    }
}
</script>

<style>
.newsdetail-title{
    text-align: center;
}
.newsdetail-title h1{
    font-size: 16px;
}
.newsdetail-title span{
    color: #666;
}
</style>
