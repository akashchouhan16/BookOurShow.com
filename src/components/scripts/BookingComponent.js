import DateSlotCardComponent from '@/components/DateSlotCardComponent.vue'
import movieMixin from '@/mixins/Movie.mixin.js'
import { mapGetters } from 'vuex';

export default {
    name: 'BookingComponent',
    data(){
        return {
        }
    },
    mixins: [movieMixin],
    components:{
        DateSlotCardComponent
    },
    computed:{
        ...mapGetters({
            noOfDays: 'getNoOfDays',
            // movie: 'getSpecificMovie',
            dateSlot: 'getDateSlot'
        })
    }
    // created(){
    //     this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);
    // }
}