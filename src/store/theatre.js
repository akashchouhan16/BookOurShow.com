import {Booking } from '../service/theatreService'
import {seat } from '../service/theatreService'
export default{
    state:{
        tickets:[ {'seat':1,'booked':true,'selected':false},
        {'seat':2,'booked':true,'selected':false},
        {'seat':3,'booked':true,'selected':false},
        {'seat':4,'booked':false,'selected':false},
        {'seat':5,'booked':false,'selected':false},
        {'seat':6,'booked':false,'selected':false},
        {'seat':7,'booked':false,'selected':false}],
         tickets1:[]
    },
    getters:{
        getTickets(state){
            // console.log("inside getter ",state)
            // return state.tickets;
            return state.tickets1;
        },
       

    },
    mutations:
    {
       setseat(state,value)
       {
         state.tickets1=value;
       },
      
    },
    actions:{
       
        GET_POST_LIST(state,value,value1){
            console.log("post",value)
            Booking({
                success:(response)=>{
                    console.log(response)
                   
                },
                error:(e)=>{
                    console.log(e)
                },
                value,value1
            })
            
        },
        GET_SEAT({commit}){
            console.log("get")
            seat({
                success:(response)=>{
                    // console.log(response)
                    commit('setseat',response);
                    
                },
                error:(e)=>{
                    console.log(e)
                }
            })
            
        }
    }
}