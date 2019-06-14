<template>
    <div class="newshead">
        <span @click="goback()">&lt;</span>
        <span @click="gohome()">HOME</span>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    name:'nav-head',
    props:['title'],
    methods:{
        goback(){
            this.$router.go(-1);
        },
        gohome(){
            this.$router.push({name:'home'});
        }
    }
}
</script>

<style>
    .newshead{overflow: hidden; background: brown; color:#fff;}
    .newshead *{
        height:30px;
        line-height: 30px;
    }
    .newshead span:nth-of-type(1){
        float:left; 
        font-size: 22px;
        margin-left: 10px;
    }
    .newshead span:nth-of-type(2){
        float:right;
        font-size: 16px;
        margin-right: 10px;
    }
    .newshead h1{
        text-align: center;
        font-size: 22px;
    }
</style>
