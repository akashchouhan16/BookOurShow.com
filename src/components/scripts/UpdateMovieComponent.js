import { mapGetters } from "vuex";
export default {
    name: "UpdateMovieComponent",
    data() {
        return {
            success: false,
            error: true,
            flag: 1,
            errorflag: false,
            ticketflag: false,
            loader: false,
            genreerror: false,
            fillfieldsflag: false,
            descriptionerror: false,
            durationerror: false,
            priceerror: false,
            dateerror: false,
            sloterror: false,
            fieldflag: false,
            movieflag:false,
            disabefieldflag: true,
            donotdisabeflag: false,
            
            movieinfo: {
                name: '',
                duration: 0,
                genre: '',
                movieId: '',
                rating: '',
                description: '',
                normalPrice: 0,
                executivePrice: 0,
                premiumPrice: 0,
                startDate: '',
                endDate: '',
                slots: [],
                imageUrl: '',
                videoUrl: '',
                message:''
            },
        };
    },
    beforeCreate() {
        console.log("to the update movie component")
        
        this.$store.dispatch('GET_MOVIE_BY_ID', this.$route.query.movieId);
    },
    computed: {
        ...mapGetters({
            movieupdate: 'getupdateSpecificMovie'
        })
    },
    methods: {
        movieupdateinfo() {
            this.movieinfo.movieId = this.$route.query.movieId
            console.log(this.movieinfo.movieId)
            this.movieinfo = this.movieupdate
            console.log()
            console.log(this.movieinfo.name)
            // alert("yes");
            this.movieinfo = this.movieupdate;
            console.log(this.movieupdate);
            if (this.movieinfo.name == "" || this.movieinfo.imageUrl == "" ||
                this.movieinfo.description == "" || this.movieinfo.slots.length <= 0 ||
                this.movieinfo.startDate == "" || this.movieinfo.endDate == "" ||
                this.movieinfo.genre == "" || this.movieinfo.normalPrice < 0 ||
                this.movieinfo.executivePrice < 0 || this.movieinfo.premiumPrice < 0 ||
                this.movieinfo.duration == 0 || this.movieinfo.rating == "") {
                this.fillfieldsflag = true;
                this.fieldflag = true;
                this.movieflag=true;
            }
            this.fillfieldsflag = false;
            this.fieldflag = false;
            // if()
            if (this.movieinfo.description.length < 10) {
                this.descriptionerror = true;
                this.fieldflag = true;
            }
            else {
                this.descriptionerror = false
            }
            if (this.movieinfo.duration < 20 || this.movieinfo.duration > 180) {
                this.durationerror = true;
                this.fieldflag = true;

            }
            else {
                this.durationerror = false;

            }

            if ((this.movieinfo.normalPrice < 0) || (this.movieinfo.executivePrice < 0) || (this.movieinfo.premiumPrice < 0) || ((this.movieinfo.normalPrice > this.movieinfo.executivePrice) || (this.movieinfo.normalPrice > this.movieinfo.premiumPrice) || (this.movieinfo.executivePrice > this.movieinfo.premiumPrice))) {                                                                                                           // &&normal>exec&&normal>premium&&exec>premium
                this.priceerror = true;
                this.fieldflag = true;
            }
            else {
                this.priceerror = false;

            }

            if (this.fieldflag) {
                console.log(this.movieinfo);
                console.log("check all flags");
            }
            else {
                console.log(this.movieinfo);
            this.$store.dispatch("UPDATE_MOVIE", this.movieinfo);
            console.log(this.movieinfo.message)
            // this.$router.push('/');
                // this.reset();
            }
        },
    }

}