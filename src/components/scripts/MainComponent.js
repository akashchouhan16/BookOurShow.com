import AddMovieComponent from '@/components/AddMovieComponent'
import UserBookings from '@/components/UserBookingsComponent'
import DescriptionComponent from '@/components/DescriptionComponent'
import BookingComponent from '@/components/BookingComponent.vue'
import SeatBookingComponent from '@/components/SeatBookingComponent.vue'
import LoginComponent from '@/components/LoginComponent'
import DeleteComponent from '@/components/DeleteComponent'
import RegisterComponent from '@/components/RegisterComponent'
import DateSlotCardComponent from '@/components/DateSlotCardComponent'

export default {
    name: 'MainComponent',
    components: {
     AddMovieComponent,
     UserBookings,
     DescriptionComponent,
     LoginComponent,
     DeleteComponent,
     RegisterComponent,
     BookingComponent,
     SeatBookingComponent,
     DateSlotCardComponent
    }
  }