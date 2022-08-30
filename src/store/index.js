import Vue from 'vue'
import Vuex from 'vuex';
import theatre from './theatre.js';
import movie from './movie';
import addmovie from './addmovie';
import LoginComponentStore from './LoginComponentStore';

Vue.use(Vuex)

export default new Vuex.Store({
modules:{
   theatre,
   movie,
   addmovie,
   LoginComponentStore
}
})