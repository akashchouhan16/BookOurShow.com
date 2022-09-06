import {getMovieById,updateMoviedetailsByMovieId} from '@/service/UpdateMovieComponentService'

export default {
    state: {
        movie: {}
    },
    getters: {
        getupdateSpecificMovie(state){
            return state.movie;
        },
        getMovie(state){
            return state.movie;
        },
    },
    mutations:{
        setupdateSpecificMovie(state, data){
            state.movie = data;
        },
        setMovie(state, newMovie){
            state.movie = newMovie;
        },
    },
    actions:{
        UPDATE_MOVIE({state},data){
            console.log("i side update movei",data)
            updateMoviedetailsByMovieId({
                success: ({data})=>{
                    console.log("store success")
                    this.commit('setupdateSpecificMovie', data);
                    // alert(data);
                    
                    console.log(state);
                    console.log(data);
                    return (data);
                    // if(state.movie)
                    

                },
                error: (err)=>{
                    console.log("store error")

                    this.commit('setupdateSpecificMovie', {});
                    console.warn(err);
                    console.log("this is an error")
                },
                data
            })
        },  GET_MOVIE_BY_ID({commit}, movieId){
            getMovieById({
                success: ({data})=>{
                    commit('setMovie', data);
                    console.log(data);
                },
                error: (err)=>{
                    commit('setMovie', {});
                    console.warn(err);
                },
                movieId
            })
        },
    }
}