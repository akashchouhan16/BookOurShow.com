import { mapGetters } from "vuex";
import MovieCardComponent from "@/components/MovieCardComponent";

export default {
  name: "HomeComponent",
  data() {
    return {
    };
  },
  components: {
    MovieCardComponent,
  },
  created() {
    this.$store.dispatch("GET_ALL_MOVIES");
  },
  computed: {
    ...mapGetters({
      movies: "getAllMovies",
      isAdmin: 'getAdminStatus'
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
    addMovie() {
        this.$router.push({path: '/addmovie'});
    },
    isCurrentRoleAdmin(){
        const role = localStorage.getItem('role');
        return (role === 'admin');
    }
  }
};
