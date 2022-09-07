import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import {getMonthName} from '@/Utils'

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
      return result;
    }
    
})
Vue.filter('filterGenre', (genre)=>{
    if(genre.length > 7 ){
        return genre.substring(0,7) + '+';
    }
    else{
      return genre.substring(0,7);
    }
    
})

Vue.filter('filterUserId', (id)=>{
    return id.substring(0,7);
})

Vue.filter('filterUIDate', (datestring)=>{
    let date = datestring.substring(8);
    let month = getMonthName(datestring.substring(6,7))
    return (date + ' ' + month);
    
})

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
