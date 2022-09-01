import Vue from 'vue'
import Vuex from 'vuex';

import LoginComponentStore from './LoginComponentStore';

Vue.use(Vuex)

export default new Vuex.Store({
modules:{
   LoginComponentStore
}
})