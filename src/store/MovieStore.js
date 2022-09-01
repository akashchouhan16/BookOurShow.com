import {getAllMovies, getMovieByMovieId} from '@/service/MovieService.js'

export default {
    state: {
        movies: [],
        movie: {} //current Movie when descp component is viewed.
    },
    getters: {
        getAllMovies(state){
            return state.movies;
        },
        getSpecificMovie(state){
            return state.movie;
        }
    },
    mutations:{
        setMovies(state, newMovies){
            state.movies = newMovies;
        },
        setSpecificMovie(state, newMovie){
            state.movie = newMovie;
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
        }
    }
}