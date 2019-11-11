import Vue from 'vue'
import App from './App.vue'
import router from './routes'
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index.js'
Vue.use(VueAxios, axios)

import {
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Divider,
  Loading
} from 'vant';

Vue.use(Loading).use(Divider).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')