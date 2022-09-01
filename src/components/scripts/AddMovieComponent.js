import { mapGetters } from "vuex";

export default {
    name: "AddMovieComponent",
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
            movieinfo: {
                name: '',
                duration: 0,
                genre: '',
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
            this.movieinfo.normalPrice = Number(this.movieinfo.normalPrice)
            this.movieinfo.executivePrice = Number(this.movieinfo.executivePrice)
            this.movieinfo.premiumPrice = Number(this.movieinfo.premiumPrice)
            this.movieinfo.duration = Number(this.movieinfo.duration)
            this.genreerror = false;
            this.descriptionerror = false;
            this.durationerror = false;
            this.fillfieldsflag = false;
            this.priceerror = false;
            this.sloterror = false;
            this.dateerror = false;
            this.fieldflag = false;
            this.movieinfo.rating = this.movieinfo.rating.toUpperCase();
            console.log(this.movieinfo);
            console.log(!((this.movieinfo.normalPrice > 0 && this.movieinfo.executivePrice > 0 && this.movieinfo.premiumPrice > 0) && (this.movieinfo.normalPrice < this.movieinfo.executivePrice) && (this.movieinfo.executivePrice < this.movieinfo.premiumPrice) && (this.movieinfo.normalPrice < this.movieinfo.premiumPrice)));
            var regex = /^[A-Za-z ]+$/
            if (
                this.movieinfo.name == "" || this.movieinfo.imageUrl == "" ||
                this.movieinfo.description == "" ||
                this.movieinfo.slots.length <= 0
                || this.movieinfo.startDate == "" || this.movieinfo.endDate == "" ||
                this.movieinfo.genre == "" || this.movieinfo.normalPrice == 0 ||
                this.movieinfo.executivePrice == 0 || this.movieinfo.premiumPrice == 0 ||
                this.movieinfo.duration == 0 || this.movieinfo.rating == ""

            ) {
                this.fillfieldsflag = true;
                this.fieldflag = true;
            }


            if (!regex.test(this.movieinfo.genre)) {
                this.genreerror = true;
                this.fieldflag = true;

            }
            else {
                this.genreerror = false;
            }
            if (this.movieinfo.slots.length <= 0) {
                this.sloterror = true;
                this.fieldflag = true;

            }
            else {
                this.sloterror = false;
            }
            if (this.movieinfo.description.length < 20) {
                this.descriptionerror = true;
                this.fieldflag = true;

            }
            else {
                this.descriptionerror = false
            }
            if ((Date.parse(this.movieinfo.startDate) > Date.parse(this.movieinfo.endDate)) && (Date.parse(new Date(this.movieinfo.startDate)) < Date.parse(new Date())) && (Date.parse(new Date(this.movieinfo.endDate)) < Date.parse(new Date()))) {
                this.dateerror = true;
                this.fieldflag = true;

            }
            else {
                this.dateerror = false;
            }
            if (this.movieinfo.duration < 20 || this.movieinfo.duration > 180) {
                this.durationerror = true;
                this.fieldflag = true;

            }
            else {
                this.durationerror = false;

            }
            // normal>0&&exec>0&&premium>0                                                                                                                      &&normal>exec&&normal>premium&&exec>premium
            if ((this.movieinfo.normalPrice < 0 && this.movieinfo.executivePrice < 0 && this.movieinfo.premiumPrice < 0)) {
            // if ((this.movieinfo.normalPrice < this.movieinfo.executivePrice) && (this.movieinfo.executivePrice < this.movieinfo.premiumPrice) && (this.movieinfo.normalPrice < this.movieinfo.premiumPrice))) {
                this.priceerror = true;
                this.fieldflag = true;
            }
            else {
                this.priceerror = false;

            }

            if (this.fieldflag == true) {
                console.log(this.movieinfo);
                console.log("check all flags");
            }
            else {
                console.log(this.movieinfo);
                this.$store.dispatch("ADD_MOVIE", this.movieinfo);
                
            }
        }
    }

}