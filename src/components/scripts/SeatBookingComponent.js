export default {
    name: 'SeatBookingComponent',
    data(){
        return {
            movie: {
                name: null,
                duration: null,
                genre: null,
                rating: null,
                startDate: null,
                endDate: null
            },
            seatNumbers: []
        }
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