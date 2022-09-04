import Vue from "vue";
import Vuex from "vuex";

import LoginComponentStore from "./LoginComponentStore";
import MovieStore from "@/store/MovieStore.js";
import AddMovieComponentStore from './AddMovieComponentStore';
import UpdateMovieComponentStore from './UpdateMovieComponentStore';
import UserBookingComponentStore from './UserBookingComponentStore'

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
    LoginComponentStore,
    MovieStore,
    AddMovieComponentStore,
    UpdateMovieComponentStore,
    UserBookingComponentStore 
  },
});

