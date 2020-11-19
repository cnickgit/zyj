import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/home/homePage";
import My from "@/page/my.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
