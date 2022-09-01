import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
// import VueCarousel from 'vue-carousel';

import router from './router/index'
import store from "@/store";
Vue.config.productionTip = false


Vue.use(BootstrapVue)
// Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
