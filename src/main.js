import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
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
Vue.config.productionTip = false
Vue.use(Vant);
Vue.use(AddressEdit);


Vue.use(Area);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')