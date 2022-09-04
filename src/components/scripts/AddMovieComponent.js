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
            ratingerror:false,
            movieinfo: {
                name: '',
                duration: '',
                genre: '',
                rating: '',
                description: '',
                normalPrice: '',
                executivePrice: '',
                premiumPrice: '',
                startDate: '',
                endDate: '',
                slots: [],
                imageUrl: '',
                videoUrl: '',
            },
        };
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
            // console.log(this.movieinfo);
            // console.log(!((this.movieinfo.normalPrice > 0 && this.movieinfo.executivePrice > 0 && this.movieinfo.premiumPrice > 0) && (this.movieinfo.normalPrice < this.movieinfo.executivePrice) && (this.movieinfo.executivePrice < this.movieinfo.premiumPrice) && (this.movieinfo.normalPrice < this.movieinfo.premiumPrice)));
            if (
                this.movieinfo.name == "" || this.movieinfo.imageUrl == "" ||
                this.movieinfo.description == "" ||
                this.movieinfo.slots.length <= 0
                || this.movieinfo.startDate == "" || this.movieinfo.endDate == "" ||
                this.movieinfo.genre == "" || this.movieinfo.normalPrice < 0 ||
                this.movieinfo.executivePrice < 0 || this.movieinfo.premiumPrice < 0 ||
                this.movieinfo.duration == 0 || this.movieinfo.rating == ""

            ) {
                this.fillfieldsflag = true;
                this.fieldflag = true;
            }

            if (this.movieinfo.slots.length <= 0) {
                this.sloterror = true;
                this.fieldflag = true;

            }
            else {
                this.sloterror = false;
            }
            if (this.movieinfo.description.length < 10) {
                this.descriptionerror = true;
                this.fieldflag = true;

            }
            else {
                this.descriptionerror = false
            }
            const today = new Date();
            if ((new Date(this.movieinfo.startDate).getTime() >new Date(this.movieinfo.endDate).getTime())|| ((new Date(this.movieinfo.startDate).getTime()<=today.getTime())||(new Date(this.movieinfo.endDate).getTime()<=today.getTime())))
            {

                this.dateerror = true;
                this.fieldflag = true;

            }
            else {
                this.dateerror = false;
            }
            if (this.movieinfo.duration < 20 && this.movieinfo.duration > 180) {
                this.durationerror = true;
                this.fieldflag = true;

            }
            else {
                this.durationerror = false;

            }
            if(this.movieinfo.rating.length>7)
            {
                this.ratingerror =true;
                this.fieldflag = true;
            }
            else{
                this.ratingerror=false
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
                this.$store.dispatch("ADD_MOVIE", this.movieinfo);
                // this.reset();
            }
            
            this.reset();
            

        },
        reset() {
            this.success = false;
            this.error = true;
            this.errorflag = false;
            for (let field in this.movieinfo) {
                this.movieinfo[field] = null;
            }
            this.movieinfo.slots=[]
        },
    }

}