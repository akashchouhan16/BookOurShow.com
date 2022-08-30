export default {
    name: 'MovieCardComponent',
    data(){
        return {

        }
    },
    methods:{
        openMovieDescription(movieid){
            this.$router.push({path: '/description', query: {movieid: movieid}});
        }
    }
}