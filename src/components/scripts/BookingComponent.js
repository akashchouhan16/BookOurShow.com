import DateSlotCardComponent from '@/components/DateSlotCardComponent.vue'
import BookingBannerComponent from '@/components/BookingBannerComponent.vue';
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
        DateSlotCardComponent,
        BookingBannerComponent
    },
    computed:{
        ...mapGetters({
            noOfDays: 'getNoOfDays',
            dateSlot: 'getDateSlot'
        })
    }
}