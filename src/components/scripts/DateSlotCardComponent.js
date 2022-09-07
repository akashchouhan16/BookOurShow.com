import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "DateSlotComponent",
  date() {
    return {};
  },
  props: {
    i: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      movie: "getSpecificMovie",
      dateSlot: 'getDateSlot'
    }),
  },
  methods: {
    currentDate(i){
      let curr = moment(new Date()).format("YYYY-MM-DD");
      let cardStartDate = (this.dateSlot.startDate < curr)? curr : this.dateSlot.startDate;
      
      let date = new Date(cardStartDate);
      date.setDate(date.getDate() + i);
      return moment(date).format("YYYY-MM-DD");

    },

    bookTicket(slot) {
      console.log(this.dataSlot);
      console.warn(slot);
    },
    setSlotAndRedirect(slot, i) {
      localStorage.setItem("slot", slot);
      localStorage.setItem("date", this.currentDate(i));
      localStorage.setItem('movieName', this.movie.name);
      console.log(
        "Selected Slot: " + slot + " | Date: " + this.dateSlot.startDate
      );
      this.$router.push({
        path: "/booking/seats",
        query: { movieId: this.movie.movieId },
      });
    },
  },
};