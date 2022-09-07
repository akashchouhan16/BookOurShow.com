import { mapGetters } from "vuex";
import movieMixin from '@/mixins/Movie.mixin.js'

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
    mixins: [movieMixin],
    computed: {
        ...mapGetters({
            // movie: 'getSpecificMovie',
            bookingStatus: 'getBookingStatus'
        })
    },
    methods:{
        saveTicket(){
            window.print();
        }
    }
}