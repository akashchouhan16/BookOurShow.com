import { mapGetters } from "vuex";

export default {
  name: "SeatBookingComponent",
  data() {
    return {
      seatNumbers: [],
      errorFlag: false,
    };
  },
  computed: {
    ...mapGetters({
      movie: "getSpecificMovie",
      movieHallStatus: "getMovieHallStatus", //all the seat bookings for the current [date,slot,show]
    }),
  },
  created() {
    this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);

    this.$store.dispatch("UPDATE_MOVIE_HALL_STATUS", {
      name: this.$store.getters.getSpecificMovie.name,
      date: localStorage.getItem("date"), 
      slot: localStorage.getItem("slot"),
    });


  },
  methods: {
    setSeats(seatNumber){
        this.seatNumbers = this.movieHallStatus.bookedSeats;
        
        if(this.seatNumbers.indexOf(seatNumber) === -1){
          console.warn('Seat Selected: ' + seatNumber);
          this.seatNumbers.push(seatNumber);
          console.warn(this.seatNumbers);
        }else{
          console.warn('This seat cannot be selected'); //temporary log
        }
    },
    checkSeatStatus(seatNumber){
        if(this.movieHallStatus.bookedSeats.indexOf(seatNumber) === -1)
          return true;
        else 
          return false;
    },
    calculateAmount(seatNumber){
      if(seatNumber<=30){
          return this.movie.normalPrice
      }else if(seatNumber<=70){
          return this.movie.executivePrice
      }else{
          return this.movie.premiumPrice
      }
    },

    bookTicket() {
      let seats = [];
      this.seatNumbers.forEach(seatNumber=>{
          seats.push({
            seatNumber: seatNumber,
            amount: this.calculateAmount(seatNumber)
          })
      })

      let ticketObject = {
        userId: localStorage.getItem("userId"),
        name: this.movie.name,
        movieId: this.movie.movieId,
        slotId: this.movieHallStatus.slotId,
        date: localStorage.getItem("date"),
        slot: localStorage.getItem("slot"),
        seat: seats,
      };

      // if (this.seatNumbers !== undefined && this.seatNumbers.length !== 0) {
        this.$store.dispatch("BOOK_TICKET_FOR_USER", ticketObject);
        // this.$router.push({ path: "/booking/confirmation" });
      // } else {
      //   this.errorFlag = true;
      //   setTimeout(() => {
      //     this.errorFlag = false;
      //   }, 1500);
      // }
    },
  },
};
