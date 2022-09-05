import {getAllMovies, getMovieByMovieId, searchMovieByName, getMovieHallStatus} from '@/service/MovieService.js'

const countDays = (startDate, endDate)=>{
    const date = new Date(startDate.getTime());

    const dates = [];

    while(date <= endDate){
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates.length;
}

export default {
    state: {
        movies: [],
        movie: {}, //current Movie when descp component is viewed.
        noOfDays: 0,
        filteredMovieList: [],
        movieHall: {}
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
        setSpecificMovie(state, newMovie){
            state.movie = newMovie;
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
        GET_MOVIE_BY_ID({commit}, movieId){
            getMovieByMovieId({
                success: ({data})=>{
                    commit('setSpecificMovie', data);
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
            showDetails.date = updateDateFormat(showDetails.date)
            getMovieHallStatus({
                success: (data)=>{
                    commit('setMovieHallStatus', data.seats)
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


function updateDateFormat(date){
    //DD-MM-YY from -> YYYY-MM-DD to
    let dd = date.substring(0,2);
    let mm = date.substring(3,5);
    let yy = date.substring(6);

    const result = (yy + '-' + mm + '-' + dd);
    console.warn(result);
    return result;
}