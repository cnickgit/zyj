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
          <div>
            <div>买家:aa</div>
            <div>实名认证:bb</div>
          </div>
          <div>
            <div>买家信誉:aa</div>
            <div>注册日期:bb</div>
          </div>
          <div>
            <div>商家信誉:aa</div>
            <div>淘龄:bb</div>
          </div>
          <div>
            <div>性别:aa</div>
            <div>买家总周平均:bb</div>
          </div>
          <div>
            好评率:ee
          </div>
          <div>
            查询时间:ee
          </div>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
    </div>
</template>

<script>
    import {searchWWH, loginZyj} from '@/api/zyj'
    import { Loading,Tab,Tabs,Search,Tabbar,TabbarItem,Button  } from 'vant'
    export default {
        name: "homePage",
        components: {
            [Loading.name]: Loading,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [Search.name]: Search,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
            [Button.name]: Button
        },
       data(){
          return {
              active: 0,
              searchName: ''
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
               })

           }
       }
    }
</script>

<style scoped>

</style>
