import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
// import VueCarousel from 'vue-carousel';

import router from './router/index'
import store from "@/store";
Vue.config.productionTip = false


Vue.use(BootstrapVue)


Vue.filter('durationFilter', (durationInMinutes)=>{
    const hours = durationInMinutes/60;
    const roundedHours = Math.floor(hours);
    const minutes = Math.round((hours - roundedHours)*60);
    
    if(minutes <= 0){
      return roundedHours.toString() + 'hr';
    }else{
      const result =  (roundedHours).toString() + 'hr ' +  (minutes).toString() + 'm';
      console.log(result);
      return result;
    }
    
})
Vue.filter('filterGenre', (genre)=>{
    if(genre.length > 6 ){
        return genre.substring(0,6) + '+';
    }
    else{
      return genre.substring(0,6);
    }
    
})

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
