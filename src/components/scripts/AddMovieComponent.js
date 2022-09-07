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
            errordispayflag:false,
            errorMessageFromBackend: "",
            ratingerror: false,
            successdispayflag:false,
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
            this.errordispayflag=false;
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
            if (this.movieinfo.name == "" || this.movieinfo.imageUrl == "" ||
                this.movieinfo.description == "" || this.movieinfo.slots.length <= 0 ||
                this.movieinfo.startDate == "" || this.movieinfo.endDate == "" ||
                this.movieinfo.genre == "" || this.movieinfo.normalPrice < 0 ||
                this.movieinfo.executivePrice < 0 || this.movieinfo.premiumPrice < 0 ||
                this.movieinfo.duration == 0 || this.movieinfo.rating == "") {
                this.fillfieldsflag = true;
                this.fieldflag = true;
            }
            
            // genre check
            else{
                this.fillfieldsflag = false;
            if(this.movieinfo.genre.length > 10) {
    this.genreerror = true;
    this.fieldflag = true;
}
            else {
    this.genreerror = false
}
// slots check
if (this.movieinfo.slots.length <= 0) {
    this.sloterror = true;
    this.fieldflag = true;
}
else {
    this.sloterror = false;
}
// description check
if (this.movieinfo.description.length < 10) {
    this.descriptionerror = true;
    this.fieldflag = true;
}
else {
    this.descriptionerror = false
}
// date check
const today = new Date();
console.log((new Date(this.movieinfo.startDate).getTime() < new Date(this.movieinfo.endDate).getTime()))
console.log((new Date(this.movieinfo.startDate).getTime() > today.getTime()))
console.log((new Date(this.movieinfo.endDate).getTime() > today.getTime()))
if ((new Date(this.movieinfo.startDate).getTime() > new Date(this.movieinfo.endDate).getTime()) || ((((new Date(this.movieinfo.startDate).getDate()) <= (today.getDate()))&&(((new Date(this.movieinfo.startDate).getMonth()) <= (today.getMonth()))) || (((new Date(this.movieinfo.endDate).getDate()) <= (today.getDate())))&&((new Date(this.movieinfo.endDate).getMonth()) <= (today.getMonth())))) || ((new Date(this.movieinfo.startDate).getTime() <= today.getTime()) || (new Date(this.movieinfo.endDate).getTime() <= today.getTime()))) {
    this.dateerror = true;
    this.fieldflag = true;
}
else {
    this.dateerror = false;
}
//duration check
if (this.movieinfo.duration < 20 || this.movieinfo.duration > 180) {
    this.durationerror = true;
    this.fieldflag = true;

}
else {
    this.durationerror = false;

}
// rating check
if (this.movieinfo.rating.length > 7) {
    this.ratingerror = true;
    this.fieldflag = true;
}
else {
    this.ratingerror = false
}
//price check
if ((this.movieinfo.normalPrice < 0) || (this.movieinfo.executivePrice < 0) || (this.movieinfo.premiumPrice < 0) || ((this.movieinfo.normalPrice > this.movieinfo.executivePrice) || (this.movieinfo.normalPrice > this.movieinfo.premiumPrice) || (this.movieinfo.executivePrice > this.movieinfo.premiumPrice))) {                                                                                                           // &&normal>exec&&normal>premium&&exec>premium
    this.priceerror = true;
    this.fieldflag = true;
}
else {
    this.priceerror = false;

}}

if (this.fieldflag) {
    console.log(this.movieinfo);
    this.errordispayflag=false;
    console.log("check all flags");
}
else {
    console.log(this.movieinfo);
    // var info = this.movieinfo
    
    this.$store.dispatch("ADD_MOVIE", {
        success: (data) => {
            this.successdispayflag=true;
            // console.log("inside cal back yes", data.response.data.message)
            this.errorMessageFromBackend = data
        }, error: (err) => {this.errordispayflag=true
            // console.log("inside cal back no", err.response.data.message)
            this.errorMessageFromBackend = err.response.data.message
        },
        movieinfo: this.movieinfo
    });
    // this.reset();
}

            // this.reset();


        },
reset() {
    this.success = false;
    this.error = true;
    this.errorflag = false;
    this.genreerror = false;
    this.descriptionerror = false;
    this.durationerror = false;
    this.fillfieldsflag = false;
    this.priceerror = false;
    this.sloterror = false;
    this.dateerror = false;
    this.fieldflag = false;
    for (let field in this.movieinfo) {
        this.movieinfo[field] = '';
    }
    this.movieinfo.slots = []
},
    }

}