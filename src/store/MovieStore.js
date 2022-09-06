import {getAllMovies, getMovieByMovieId, searchMovieByName, getMovieHallStatus, getUpcomingMovies} from '@/service/MovieService.js'

// Utility:
import { countDays } from '@/Utils';

export default {
    state: {
        movies: [],
        movie: {}, //current Movie when descp component is viewed.
        dateSlot: {},
        noOfDays: 0,
        filteredMovieList: [],
        upcomingMovies: [],
        movieHall: {}
    },
    getters: {
        getAllMovies(state){
            return state.movies;
        },
        getUpcomingMovies(state){
            return state.upcomingMovies;
        },
        getSpecificMovie(state){
            return state.movie;
        },
        getDateSlot(state){
            return state.dateSlot
        },
        getFilteredMovieList(state){
            return state.filteredMovieList;
        },
        getNoOfDays(state){
            return state.noOfDays;
        },
        getMovieHallStatus(state){
            return state.movieHall;
        }
    },
    mutations:{
        setMovies(state, newMovies){
            state.movies = newMovies;
        },
        setUpcomingMovies(state, newMovies){
            state.upcomingMovies = newMovies;
        },
        setSpecificMovie(state, newMovie){
            state.movie = newMovie;
        },
        setDateSlot(state, newDateSlot){
            state.dateSlot = newDateSlot
        },
        setFilteredMovieList(state, newFilteredList){
            state.filteredMovieList = newFilteredList;
        },
        setNoOfDays(state, newNoOfDays){
            state.noOfDays = newNoOfDays;
        },
        setMovieHallStatus(state, newMovieHall){
            state.movieHall = newMovieHall;
        }
    },
    actions:{
        GET_ALL_MOVIES({commit}){
            getAllMovies({
                success: (data)=>{
                    commit('setMovies', data);
                    console.warn(data);
                },
                error: (err)=>{
                    console.warn(err);
                    commit('setMovies', []);
                }
            })
        },
        GET_UPCOMING_MOVIES({commit}){
            getUpcomingMovies({
                success: (data)=>{
                    commit('setUpcomingMovies', data);
                },
                error: (err)=>{
                    commit('setUpcomingMovies', []);
                    console.warn(err);
                }
            })
        },
        GET_MOVIE_BY_ID({commit}, movieId){
            getMovieByMovieId({
                success: ({data})=>{
                    commit('setSpecificMovie', data);
                    commit('setDateSlot', {
                        startDate: data.startDate, endDate: data.endDate, slots: data.slots
                    });
                    
                    console.log(data);

                    //Logic to set no of days based on startDate and endDate:
                    commit('setNoOfDays', countDays(new Date(data.startDate), new Date(data.endDate)));
                },
                error: (err)=>{
                    commit('setSpecificMovie', {});
                    console.warn(err);
                },
                movieId
            })
        },
        SEARCH_MOVIE_BY_NAME({commit}, movieName){
            searchMovieByName({
                success : (data)=>{
                    commit('setFilteredMovieList', data);
                },
                error: (err)=>{
                    commit('setFilteredMovieList', []);
                    console.warn(err);
                },
                movieName
            })
        },

        UPDATE_MOVIE_HALL_STATUS({commit}, showDetails){
            
            getMovieHallStatus({
                success: (data)=>{
                    commit('setMovieHallStatus', data)
                    console.log(data);
                    // {
                    //     slotId: data.slotId, //identifier for current movieHall,
                    //     bookedSeats: data.bookedSeats //Array of index for seat numbers
                    // }
                },
                error: (err)=>{
                    commit('setMovieHallStatus', {})
                    console.warn(err);
                },
                showDetails
            })
        }
    }
}


