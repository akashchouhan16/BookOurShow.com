import DateSlotCardComponent from '@/components/DateSlotCardComponent.vue'
import dateSlots from '@/mockData/dateSlots.js'
export default {
    name: 'BookingComponent',
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
            dateSlots: dateSlots
        }
    },
    components:{
        DateSlotCardComponent
    },
    mounted(){
        console.log(this.dateSlots);
    },
    methods:{

    }
}