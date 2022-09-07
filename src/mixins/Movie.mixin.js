import { mapGetters } from "vuex";

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
          movie: "getSpecificMovie",
          movieHallStatus: "getMovieHallStatus", //all the seat bookings for the current [date,slot,show]
        }),
    },
    created() {
        this.$store.dispatch("GET_MOVIE_BY_ID", this.$route.query.movieId);
    },
}