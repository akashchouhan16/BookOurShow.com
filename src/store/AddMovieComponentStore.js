import {addmovieinlist} from "../service/AddMovieComponentService"

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
        ADD_MOVIE({state},{success,error,movieinfo})
        {
          console.log(state);
            addmovieinlist({
              
              success:({data})=>{
                // console.log(data);
               
                this.commit('setaddmovie',data);
                success &&  success(data);
                // this.commit(this.addmovie,[])
              },
              error:(err)=>{
                // console.log(err)

                this.commit('setaddmovie',[])
                error &&  error(err);
              },
              movieinfo
            })
             
        },}}