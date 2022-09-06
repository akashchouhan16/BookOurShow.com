export default {
    name: 'MovieCardComponent',
    data() {
        return {
            visibleflag: false
        }
    },
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        openMovieDescription() {
            this.$router.push({ path: '/description', query: { movieId: this.movie.movieId } });
        },
        updateMovie() {
            console.log("inside moviecard component.js")
            console.log(this.movie.movieId)
            this.$router.push({ path: '/updatemovie', query: { movieId: this.movie.movieId } });
        },
        checkIfAdmin(){
            const role = localStorage.getItem('role');
            if(role === undefined || role === '' || role !== 'admin')
                return false;
            else return true;
        }
    }
    , created() {
        if (localStorage.getItem('role') == 'admin') {
            this.visibleflag = true;
        }
    }
}