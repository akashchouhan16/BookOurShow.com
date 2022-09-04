import {getUserBookingDetails, bookTicketforUser} from '@/service/UserBookingComponentService.js'
export default{
    state:{
        userdetails:[],
        bookingStatus: {}
    },
    getters:{
        getUserBookingDetails(state)
        {
            return state.userdetails;
        },
        getBookingStatus(state){
            return state.bookingStatus;
        }
    },
    mutations:{
        setUserBookingDetails(state,users)
        {
            state.userdetails = users
        },
        setBookingStatus(state, newStatus){
            state.bookingStatus = newStatus;
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
        },

        BOOK_TICKET_FOR_USER({commit}, ticketObject){
            bookTicketforUser({
                success: (data)=>{
                    console.log(data);
                    commit('setBookingStatus', data);
                },
                error: (err)=>{
                    console.warn(err);
                    commit('setBookingStatus', {});
                },
                ticketObject
            })
        }
    }
}