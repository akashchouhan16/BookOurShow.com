import { mapGetters } from "vuex";

export default {
    name: 'SeatBookingComponent',
    data(){
        return {
            seatNumbers: []
        }
    },
    computed:{
        ...mapGetters({
            movie: 'getSpecificMovie',
            movieHallStatus: 'getMovieHallStatus' //all the seat bookings for the current [date,slot,show]
        })
    },
    created(){
        this.$store.dispatch('UPDATE_MOVIE_HALL_STATUS', {
            name: this.$store.getters.getSpecificMovie.name, //DD-MM-YY format used here.
            date: localStorage.getItem('date'),
            slot: localStorage.getItem('slot')
        })
    },
    methods:{
        setSeats(seat){
            this.seatNumbers.push({
                seatNumber: seat,
                userId: localStorage.getItem('userId')
            });
            localStorage.setItem('seats', JSON.stringify(this.seatNumbers));
            console.log(this.seatNumbers);
        },

        bookTicket(){
            let ticketObject = {
                userId: localStorage.getItem('userId'),
                name: this.movie.name,
                movieId: this.movie.movieId,
                slotId: '12345678',
                date: localStorage.getItem('date'),
                slot: localStorage.getItem('slot'),
                seats: this.seatNumbers
            }
            this.$store.dispatch('BOOK_TICKET_FOR_USER', ticketObject);
            
            this.$router.push({path: '/booking/confirmation'});
        }
    }
}