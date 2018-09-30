import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)


const FastClick = require('fastclick');
FastClick.attach(document.body);
Vue.config.productionTip = false;
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');




