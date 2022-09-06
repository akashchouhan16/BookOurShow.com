export default {
    name: 'FailedBookingComponent',
    data(){
        return {

        }
    },
    methods:{
        bookAnotherSeat(){
            this.$router.push({path: '/booking/seats', query: {movieId: this.$route.query.movieId}});
        }
    }
}