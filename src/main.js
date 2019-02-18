import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
import {
  AddressEdit
} from 'vant';
import {
  Area
} from 'vant';
import {
  Toast
} from 'vant';
Vue.use(Toast);
Vue.use(AddressEdit);
Vue.use(Vant);
Vue.use(AddressEdit);
Vue.use(Area);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')