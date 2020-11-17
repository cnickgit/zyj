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
      <van-tabbar v-model="active">
        <van-tabbar-item
          v-for="(item,index) in tabbars"
          :key="index"
          @click="tab(index,item.name)"
        >
          <span :class="currIndex == index ? active:''">{{item.title}}</span>
          <template slot="icon" slot-scope="props">
            <img :src="item.normal">
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    import {searchWWH} from '@/api/zyj'
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
              currIndex: 0,
              active: 0,
              tabbars: [
                  {
                      name: "",
                      title: "首页",
                      normal: require('@/assets/home_ico_active.png'),
                      active: 0
                  },
                  {
                      name: "category",
                      title: "打标",
                      normal: require('@/assets/report_ico.png'),
                      active: 1
                  },
                  {
                      name: "message",
                      title: "客服",
                      normal: require('@/assets/teas_ico.png'),
                      active: 2
                  },
                  {
                      name: "cart",
                      title: "打标记录",
                      normal: require('@/assets/save_ico.png'),
                      active: 3
                  },
                  {
                      name: "My",
                      title: "我的",
                      normal: require('@/assets/my_ico.png'),
                      active: 4
                  }
              ],
              searchName: ''
          }
       },
       methods: {
           tab(index, val) {
               this.currIndex = index;
               this.$router.push(val);
           },
           search(){
               let param = {
                   m: "queryAliim",
                   aliim: this.searchName
               }
               searchWWH(param).then(res => {
                   console.log("res:",res);
               })

           }
       }
    }
</script>

<style scoped>

</style>
