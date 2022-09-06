import DateSlotCardComponent from '@/components/DateSlotCardComponent.vue'
// import dateSlots from '@/mockData/dateSlots.js'
import { mapGetters } from 'vuex';

export default {
    name: 'BookingComponent',
    data(){
        return {
            // dateSlots: dateSlots
        }
    },
    components:{
        DateSlotCardComponent
    },
    computed:{
        ...mapGetters({
            noOfDays: 'getNoOfDays',
            movie: 'getSpecificMovie',
            dateSlot: 'getDateSlot'
        })
    },
    created(){
        this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);
    },
    mounted(){
        console.log(this.dateSlots);
    },

}