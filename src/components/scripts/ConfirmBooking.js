import { mapGetters } from "vuex";

export default{
    name: 'ConfirmBookingComponent',
    data(){
        return {
            userId: localStorage.getItem('userId'),
            username: localStorage.getItem('name'),
            date: localStorage.getItem('date'),
            slot: localStorage.getItem('slot'),
            seats: JSON.parse(localStorage.getItem('seats'))
        }
    },
    created(){
        this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);
    },
    computed: {
        ...mapGetters({
            movie: 'getSpecificMovie',
            bookingStatus: 'getBookingStatus'
        })
    },
    methods:{
        saveTicket(){
            window.print();
        }
    }
}