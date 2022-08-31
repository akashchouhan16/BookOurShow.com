import { mapGetters } from "vuex";

export default{
    name:"AddMovieComponent",data() {
        return {
          success: false,
    
          error: true,
    
          flag: 1,
    
          errorflag: false,
    
          ticketflag: false,
    
          loader: false,
    
          movieinfo: {
            name: "",
    
            imageUrl: "",
    
            description: "",
    
            total_no_tickets: 0,
    startdate:'',
            ticketPrice: 0,
            enddate:'',
            timeSlot: null,
            videoUrl: null,
          },
        };
      },
    
      computed: {
        ...mapGetters({
          addmovie: "getmovieinfo",
        }),
      },
    
      methods: {
        movieinfo1() {
          console.log(this.movieinfo.enddate);
          console.log(this.movieinfo.startdate);
    
    //       if (
    //         this.movieinfo.name == "" ||
    //         this.movieinfo.imageUrl == "" ||
    //         this.movieinfo.videoUrl == "" ||
    //         this.movieinfo.description == "" ||
    //         this.movieinfo.total_no_tickets == 0 ||
    //         this.movieinfo.ticketPrice == 0 ||
    //         this.movieinfo.timeSlot == null
    //       ) {
    //         this.error = false;
    //       }
    
    //       if (this.error == true) {
    //         this.success = true;
    
    //         this.$store.dispatch("UPDATE_MOVIE", this.movieinfo);
    //       } else {
    //         this.errorflag = true;
    //       }
    //     },
    //     deletemovie() {
    //       this.$router.push({ path: "/delete" });
    //     },
    //     reset() {
    //       this.success = false;
    
    //       this.error = true;
    
    //       this.errorflag = false;
    
    //       for (let field in this.movieinfo) {
    //         this.movieinfo[field] = null;
    //       }
    //     },
    //   },
        }},
      created() {
        this.$store.dispatch("ADD_MOVIE");
      },
}