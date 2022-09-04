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
        }
    }
}