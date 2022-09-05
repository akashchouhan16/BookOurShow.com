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
    computed: {
        ...mapGetters({
            movie: 'getSpecificMovie'
        })
    },
    methods:{
        saveTicket(){
            window.print();
        }
    }
}