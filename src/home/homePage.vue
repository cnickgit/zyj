<template>
    <div>
      <van-tabs type="card">
        <van-tab title="标签 1">
          <van-search
            v-model="searchName"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
          <div>
            <van-button round type="info" size="large" @click="search()">查询</van-button>
          </div>
          <div v-if="false">
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">买家: 8</van-col>
              <van-col span="12">实名认证: 8</van-col>
            </van-row>
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">买家信誉: 8</van-col>
              <van-col span="12">注册日期: 8</van-col>
            </van-row>
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">商家信誉: 8</van-col>
              <van-col span="12">	淘龄: 8</van-col>
            </van-row>
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">性别: 8</van-col>
              <van-col span="12">	买家总周平均: 8</van-col>
            </van-row>
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">好评率: 8</van-col>
            </van-row>
            <van-row style="margin-top: 20px;" justify="center">
              <van-col span="12">查询时间: 8</van-col>
            </van-row>
          </div>
          <div v-if="true">
            <van-row class="content">
              <van-col span="24">兔子：拿完了商家的返款就恶意退款</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">蜜獾：用各种方式威胁你给钱</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">狐狸：用各种方式骗你钱了</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">鳄鱼：用发票，商标，假货等方式坑你钱</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">野狗：接完了单给了你差评进行要挟</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">老鼠：用了淘客链接来拍你的单</van-col>
            </van-row>
            <van-row class="content">
              <van-col span="24">降权：导致商家单品降权的帐号</van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </div>
</template>

<script>
    import {searchWWH, loginZyj} from '@/api/zyjReq/zyj'
    import { Loading,Tab,Tabs,Search,Tabbar,TabbarItem,Button,Col, Row  } from 'vant'
    export default {
        name: "homePage",
        components: {
            [Loading.name]: Loading,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Search.name]: Search,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Button.name]: Button,
            [Col.name]: Col,
            [Row.name]: Row
        },
       data(){
          return {
              active: 0,
              searchName: '',
          }
       },
       methods: {
           setCookiejs(name, value) {
               var Days = 1;
               var exp = new Date();
               exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
               document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
               // document.cookie="us=11"
               console.log(document.cookie);
           },
           search(){
               let params = {
                   m: "sAliim",
                   ifQBase: true,
                   ifQReport: true,
                   judgeAnother: true,
                   aliim: this.searchName,
                   c: "nznd"
               }
               searchWWH(params).then(res => {
                   console.log("res:",res)
               })
           },
           login(){
               //先模拟登陆
               let data = {
                   m: "login",
                   username:"13868612368",
                   password:"gl112233",
                   parcame:"ajax",
                   type:1,
                   origin:"cktoolApp"
               }
               loginZyj(data).then(res => {
                   this.setCookiejs("13868612368","13868612368"+"&"+window.btoa("gl112233"));

               })
           }
       },
       created() {
          this.login();
       }
    }
</script>

<style scoped>
.content{
  margin-top: 20px;
}
</style>
