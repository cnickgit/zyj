import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import vuexPersistedstate from 'vuex-persistedstate';
Vue.use(Vuex)

// 使用 es6 语法把vuex的实例对象输出
export default new Vuex.Store({
  modules: {},
  plugins: [vuexPersistedstate({
    storage: window.sessionStorage
  })],
  state,
  getters,
  mutations,
  actions,
})
