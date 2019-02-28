import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import qs from 'qs';
import './assets/common.css'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$qs = qs;
Vue.prototype.$http = axios;
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.get('http://icampaign.com.cn/customers/noob/app/index.php', {
        params: {
          i: "10",
          c: "entry",
          p: "user",
          do: "shop",
          m: "ewei_shop",
          ac: "get_info"
        }
      })
      .then(function (response) {
        if (response.data && response.data.result && response.data.result.is_registered == '0' && to.name != 'noMember') {
          next({
            name: 'noMember'
          });
        } else if (response.data && response.data.result && response.data.result.is_registered == '1' && to.name != 'noMemberStatus') {
          next({
            name: 'noMemberStatus'
          });
        } else if (response.data && response.data.result && response.data.result.is_registered == '2') {
          next();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    next() // make sure to always call next()!
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')