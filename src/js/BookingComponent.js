import { mapGetters } from 'vuex'
import MovieDetails from '../components/images'
import { getbooking  } from '@/service/movielist'
import { sendSeat } from '@/service/theatreService'
// import { seat } from '@/service/theatreService'

export default{
    name:'DescriptionComponent',
    data(){
        return{
            MovieDetails:MovieDetails,
            btn:'',
            count:null,
            customername:'',
            PhoneNumber:'',
            seat:[],
            movie:{},
            id:this.$route.query.movieid,
            name:this.$route.query.moviename,


        }
    },
    mounted(){
        console.log(this.$route.query)
        this.$store.dispatch("GET_SEAT");
        console.log('getseat')
    },
    computed:{
        ...mapGetters({
            ticketList :'getTickets'

          })
    },
    methods:{
        booknextbutton(){
          
            this.count=this.ticketList.filter(tic=>tic.selected==true).length
            this.seat.push(this.ticketList.filter(tic=>tic.seat&&tic.selected==true))
            console.log(this.seat)
            
            alert(this.count)
            var obj={
        
                'customername':this.customername, 
                'movieid':this.$route.query.movieid,
                'moviename':this.$route.query.moviename,
                'netprice':300,
                'noofticket':this.count,
                'mobilenumber':this.PhoneNumber ,

            }
            var seat={
                'seat':this.seat
            }
            console.log('seat',obj,seat)
            // this.$router.push({path:'/bookedDetails'})
            // for(i=0;i<this.ticketList.lenght;i++){
            //     if(this.ticketList.select=="true"){
            //         this.count++;
            //         console.log(this.count)
            //     }
            // }
            this.$store.dispatch('GET_POST_LIST',obj)
            sendSeat({
                success:(response)=>{
                    console.log(response)
                   
                },
                error:(e)=>{
                    console.log(e)
                },
                seat
            })
             this.$router.push({path:'/bookedDetails',query:{mobilenumber:this.PhoneNumber}})
        },
        bookingButton(){
            return this.MovieDetails.ticketss
        }
       
    },
    created()

    {
        console.log('desc',this.$route.query.movieid)
        // this.$store.dispatch('GET_DESC',this.$route.query.movieid);
        getbooking({
            success:(data)=>{
              console.log(data);
              this.movie=data
            //   console.log(this.movie);
            //   this.commit('setmoviedesc',data);
              
            },
            error:()=>{
                console.log('error')
            //   this.commit('setmoviedesc',[])
            },
            value:this.id
          })

    }
   
    
}
