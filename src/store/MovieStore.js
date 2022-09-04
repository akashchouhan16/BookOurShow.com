import {getAllMovies, getMovieByMovieId, searchMovieByName} from '@/service/MovieService.js'

export default {
    state: {
        movies: [],
        movie: {}, //current Movie when descp component is viewed.
        filteredMovieList: []
    },
    getters: {
        getAllMovies(state){
            return state.movies;
        },
        getSpecificMovie(state){
            return state.movie;
        },
        getFilteredMovieList(state){
            return state.filteredMovieList;
        }
    },
    mutations:{
        setMovies(state, newMovies){
            state.movies = newMovies;
        },
        setSpecificMovie(state, newMovie){
            state.movie = newMovie;
        },
        setFilteredMovieList(state, newFilteredList){
            state.filteredMovieList = newFilteredList;
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
        GET_MOVIE_BY_ID({commit}, movieId){
            getMovieByMovieId({
                success: ({data})=>{
                    commit('setSpecificMovie', data);
                    console.log(data);
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
        }
    }
}