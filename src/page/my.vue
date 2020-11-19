<template>
  <div>
    <van-row type="flex" justify="center">
      <van-col span="6">0</van-col>
      <van-col span="6">0</van-col>
      <van-col span="6">480</van-col>
      <van-col span="6">481</van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="6">我的照妖币</van-col>
      <van-col span="6">我的点数</van-col>
      <van-col span="6">今天已查</van-col>
      <van-col span="6">昨天已查</van-col>
    </van-row>
    <van-cell title="我的查询历史" is-link url="/vant/mobile.html" />
    <van-cell title="照妖镜使用规则" is-link url="/vant/mobile.html" />
    <van-row type="flex">
      <van-col span="3">分享</van-col>
      <van-col span="3">退出</van-col>
      <van-col span="5">修改密码</van-col>
      <van-col span="5">我要充值</van-col>
      <van-col span="5">我要购点</van-col>
    </van-row>
  </div>
</template>

<script>
    import { Col, Row, Cell, CellGroup } from 'vant';
    export default {
        name: "my.vue",
        components:{
            [Col.name]: Col,
            [Row.name]: Row,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
        }
    }
</script>

<style scoped>

</style>
