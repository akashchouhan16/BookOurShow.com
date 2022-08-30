import { mapGetters } from "vuex";
import MovieCardComponent from '@/components/MovieCardComponent'


export default {
  name: "HomeComponent",
  data() {
    return {

    };
  },
  components: {
    MovieCardComponent
  },
  computed: {
    ...mapGetters({
      movielist: "getmovie",
    }),
  },

  methods: {
    viewdetails(id, name) {

      console.log("movielist", id);
      this.$router.push({
        path: "/description",
        query: { movieid: id, moviename: name },
      });
    },
  },

  created() {
    this.$store.dispatch("GET_MOVIE");
  },
};
