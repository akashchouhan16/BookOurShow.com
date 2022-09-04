import {getUserBookingDetails} from '@/service/UserBookingComponentService.js'
export default{
    state:{
        userdetails:[]
    },
    getters:{
        getUserBookingDetails(state)
        {
            return state.userdetails;
        }
    },
    mutations:{
        setUserBookingDetails(state,users)
        {
            state.userdetails = users
        }
    },
    actions:{
        GET_USER_TICKETS({state},userid){
            console.log(state.userdetails)
            getUserBookingDetails({
                
                success:({data})=>{
                    this.commit('setUserBookingDetails',data);

                },
                error: (err)=>{
                    console.log(err);
                    // commit('setMovies', []);
                },
                userid
            })
        }
    }
}