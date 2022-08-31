import {getmovielist} from "../service/movielist.js"
import {getmoviedesc} from "../service/movielist.js"

export default{
    state:
    {
       movielist:[],
       moviedesc:[]
    },
    getters:
    {
        getmovie(state)
        {
          return state.movielist;
        },
        getmoviedescription(state){
            return state.moviedesc;
        }
    },
    mutations:
    {
       setmovie(state,value)
       {
         state.movielist=value;
       },
       setmoviedesc(state,value)
       {
         state.moviedesc=value;
       }

    },
    actions:
    {
        GET_MOVIE()
        {
            getmovielist({
              success:({data})=>{
                console.log(data);
                this.commit('setmovie',data);
                
              },
              error:()=>{
                this.commit('setmovie',[])
              }
            })
             
        },
        GET_DESC(context,value){
            getmoviedesc({
                success:({data})=>{
                  console.log('getdesc',data);
                  this.commit('setmoviedesc',data);
                  
                },
                error:()=>{
                  this.commit('setmoviedesc',[])
                }
              },value)
        }
    }
}