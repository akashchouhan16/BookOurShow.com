import {updateMoviedetailsByMovieId} from '@/service/UpdateMovieComponentService'

export default {
    state: {
        movie: {}
    },
    getters: {
        getupdateSpecificMovie(state){
            return state.movie;
        }
    },
    mutations:{
        setupdateSpecificMovie(state, data){
            state.movie = data;
        }
    },
    actions:{
        UPDATE_MOVIE({state},movieId){
            console.log("i side update movei",movieId)
            updateMoviedetailsByMovieId({
                success: ({data})=>{
                    console.log("store success")
                    this.commit('setupdateSpecificMovie', data);
                    alert(data);
                    console.log(state.movie);
                    

                },
                error: (err)=>{
                    console.log("store error")

                    this.commit('setupdateSpecificMovie', {});
                    alert(err);
                    console.log("this is an error")
                },
                data:movieId
            })
        }
    }
}