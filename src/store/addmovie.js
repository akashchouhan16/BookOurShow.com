import {getaddmovielist} from "../service/addmovielist.js"
import {addmovielist} from "../service/addmovielist.js"

export default{
    state:
    {
       addmovie:[]
    },
    getters:
    {
        getaddmovie(state)
        {
          return state.addmovie;
        }
    },
    mutations:
    {
       setaddmovie(state,value)
       {
         state.addmovie=value;
       }
    },
    actions:
    {
        ADD_MOVIE()
        {
            getaddmovielist({
              success:({data})=>{
                // console.log(data);
                this.commit('setaddmovie',data);
                
              },
              error:()=>{
                this.commit('setaddmovie',[])
              }
            })
             
        },
        UPDATE_MOVIE(context,value)
        {
            addmovielist({
                payload:value,
              success:(data)=>{
                // this.commit('setaddmovie',data)
                // value1;
                // this.success=true;
                console.log(data);
                this. dispatch('getaddmovie',data);
                
              },
              error:()=>{
                // this.commit('setaddmovie',[])
              },
            //   headers
            }) 
        }
    }
}