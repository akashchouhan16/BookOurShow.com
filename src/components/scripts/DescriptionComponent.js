export default {
    name: 'DescriptionComponent',
    data(){
        return {
            movie: {
                name: null,
                duration: null,
                genre: null,
                rating: null
            }
        }
    },
    methods:{
        bookTickets(){
            console.log('Booking....'); 
        }
    }
}