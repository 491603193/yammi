import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
