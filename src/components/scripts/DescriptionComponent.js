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
            const role = localStorage.getItem('role');
            const username = localStorage.getItem('name');
            if(role === null || username === null || role === undefined || username === undefined){
                this.$router.push({path: '/login'}); //then again redirect back to the TicketBookingCompnent
            }else{
                this.$router.push({path: '/booking'});
            }
        }
    }
}