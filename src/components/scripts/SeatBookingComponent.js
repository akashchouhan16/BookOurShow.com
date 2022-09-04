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
            movie: 'getSpecificMovie'
        })
    },
    methods:{
        setSeats(seat){
            this.seatNumbers.push({
                seatNumber: seat,
                userId: localStorage.getItem('userId')
            });
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
        }
    }
}