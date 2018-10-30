import Vue from 'vue'
import Vuex from 'vuex'
import {indexConsts} from './common/utils/BaseConsts.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: {
          isLogin:true
      },
      index: {
          currentTabComponent: indexConsts.tabs[0]
      }
  },
  mutations: {
      setTabIndex (state,index) {
          // 变更状态
          state.index.currentTabComponent = indexConsts.tabs[index];
      }
  },
  actions: {

  }
})
