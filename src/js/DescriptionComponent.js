import MovieDetails from '../components/images'
import { mapGetters } from 'vuex';
import {getmoviedesc} from '../service/movielist'
// import {getmovie} from '@/service/movielist'
// import {getmovie} from '@/service/movielist'
export default{
    name:'DescriptionComponent',
    data(){
        return{
            MovieDetails:MovieDetails,
            id:this.$route.query.movieid,
            name:this.$route.query.moviename,
            getmoviedesc:[],
            movie:{}
        }
    },
    

    computed:

    {

        ...mapGetters({
          movielist:'getmovie',
          moviedesc:'getmoviedescription',
        })

    },
    

   
    methods:{
        bookbutton(){
    //    this.$router.push({path:'/booking',query:{movieid:this.id,slot:'slot'}})
        this.$router.push({path:'/userlogin',query:{movieid:this.id,moviename:this.name}})
        }
    },
    created()

    {
        console.log('desc',this.$route.query.movieid)
        // this.$store.dispatch('GET_DESC',this.$route.query.movieid);
        getmoviedesc({
            success:(data)=>{
              console.log(data);
              this.movie=data
              console.log(this.movie);
            //   this.commit('setmoviedesc',data);
              
            },
            error:()=>{
                console.log('error')
            //   this.commit('setmoviedesc',[])
            },
            value:this.id
          })

    }

//     mounted(){
    
//         getmoviedesc({
//              success:({data})=>{
                
//         //   this.getmoviedesc.push(data);
//         //   console.log( FinalList)
//           console.log('inside getmoviedesc',data)
//         //    this.$router.push({path:'/description',query:{sku:`${data.data.value}`}})
//         },
//          error: (e) => {

//                  console.log(e)

//                 },
               
//         })
// }
    
    
}
