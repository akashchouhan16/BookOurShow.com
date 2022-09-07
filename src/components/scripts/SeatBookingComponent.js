import { mapGetters } from "vuex";
import movieMixin from '@/mixins/Movie.mixin.js'

export default {
  name: "SeatBookingComponent",
  data() {
    return {
      seatNumbers: [],
      newSeats: [],
      hasUserSelected: false,
      errorFlag: false,
    };
  },
  mixins: [movieMixin],
  computed: {
    ...mapGetters({
      movieHallStatus: "getMovieHallStatus", //all the seat bookings for the current [date,slot,show]
    }),
  },
  created() {
    
    this.$store.dispatch("UPDATE_MOVIE_HALL_STATUS", {
      name: localStorage.getItem('movieName'),
      date: localStorage.getItem("date"),
      slot: localStorage.getItem("slot"),
    });
  },
  methods: {
    setSeats(seatNumber) {
      this.hasUserSelected = true;
      this.seatNumbers = this.movieHallStatus.bookedSeats;
      
      if (this.seatNumbers.indexOf(seatNumber) === -1) {
        console.warn("Seat Selected: " + seatNumber);
        this.seatNumbers.push(seatNumber);
        this.newSeats.push(seatNumber);
        console.warn(this.seatNumbers);
      } else {
        console.warn("This seat unselected"); //temporary log
        const index = this.seatNumbers.indexOf(seatNumber);
        if (index > -1) {
          this.seatNumbers.splice(index, 1);
          this.newSeats.splice(index,1);
        }
      }
    },
    checkSeatStatus(seatNumber) {
      if (this.movieHallStatus.bookedSeats.indexOf(seatNumber) === -1)
        return true;
      else return false;
    },
    calculateAmount(seatNumber) {
      if (seatNumber <= 30) {
        return this.movie.normalPrice;
      } else if (seatNumber <= 70) {
        return this.movie.executivePrice;
      } else {
        return this.movie.premiumPrice;
      }
    },

    bookTicket() {
      let seats = [];
      this.newSeats.forEach((seatNumber) => {
        seats.push({
          seatNumber: seatNumber,
          amount: this.calculateAmount(seatNumber),
        });
      });

      let ticketObject = {
        userId: localStorage.getItem("userId"),
        name: this.movie.name,
        movieId: this.movie.movieId,
        slotId: this.movieHallStatus.slotId,
        date: localStorage.getItem("date"),
        slot: localStorage.getItem("slot"),
        seat: seats,
      };

      if (this.hasUserSelected && this.seatNumbers !== undefined) {
        this.$store.dispatch("BOOK_TICKET_FOR_USER", {
          success: ()=>{
            this.$router.push({ path: "/booking/confirmation", query: {movieId: this.movie.movieId, slotId: this.movieHallStatus.slotId}});
          },
          error: ()=>{
            this.$router.push({path: '/booking/failed', query: {movieId: this.movie.movieId}})
          },
          ticketObject
        });
        
      } else {
        this.errorFlag = true;
        setTimeout(() => {
          this.errorFlag = false;
        }, 2500);
      }
    },
    refresh(){
      this.$store.dispatch("UPDATE_MOVIE_HALL_STATUS", {
        name: this.$store.getters.getSpecificMovie.name,
        date: localStorage.getItem("date"),
        slot: localStorage.getItem("slot"),
      });
      this.seatNumbers = this.newSeats = [];
    }
  },
};
