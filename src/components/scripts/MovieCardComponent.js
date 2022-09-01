export default {
    name: 'MovieCardComponent',
    data(){
        return {

        }
    },
    props:{
        movie:{
            type: Object,
            required: true
        }
    },
    methods:{
        openMovieDescription(){
            this.$router.push({path: '/description', query: {movieId: this.movie.movieId}});
        }
    }
}