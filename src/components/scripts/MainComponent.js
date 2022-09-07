import AddMovieComponent from '@/components/AddMovieComponent'
import UserBookings from '@/components/UserBookingsComponent'
import DescriptionComponent from '@/components/DescriptionComponent'
import BookingComponent from '@/components/BookingComponent.vue'
import SeatBookingComponent from '@/components/SeatBookingComponent.vue'
import LoginComponent from '@/components/LoginComponent'
import BookingBannerComponent from '@/components/BookingBannerComponent.vue'
import RegisterComponent from '@/components/RegisterComponent'
import DateSlotCardComponent from '@/components/DateSlotCardComponent'
import UpdateMovieComponent from '@/components/UpdateMovieComponent'
import ConfirmBookingComponent from '@/components/ConfirmBookingComponent'

export default {
    name: 'MainComponent',
    components: {
     AddMovieComponent,
     UserBookings,
     DescriptionComponent,
     LoginComponent,
      BookingBannerComponent,
     RegisterComponent,
     BookingComponent,
     SeatBookingComponent,
     DateSlotCardComponent,
     UpdateMovieComponent,
     ConfirmBookingComponent
    }
  }