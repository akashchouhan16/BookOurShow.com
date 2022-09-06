import { mapGetters } from "vuex";

export default {
    name: 'DescriptionComponent',
    data(){
        return {
            // movie: {
            //     name: null,
            //     duration: null,
            //     genre: null,
            //     rating: null
            // }
        }
    },
    created(){
        this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);
    },
    computed:{
        ...mapGetters({
            movie: 'getSpecificMovie'
        })
    },
    methods:{
        bookTickets(){
            const role = localStorage.getItem('role');
            const username = localStorage.getItem('name');
            if(role === null || username === null || role === undefined || username === undefined){
                this.$router.push({path: '/login', query: { redirect: `/booking?movieId=${this.movie.movieId}`}}); //then again redirect back to the TicketBookingCompnent
            }else{
                this.$router.push({path: '/booking', query: {movieId: this.movie.movieId}});
            }
        }
    }
}