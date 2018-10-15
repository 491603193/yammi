import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user:{
          isLogin:true
      }
  },
  mutations: {
      setIsLogin (state,isLogin) {
          // 变更状态
          state.user.isLogin = isLogin;
      }
  },
  actions: {

  }
})
