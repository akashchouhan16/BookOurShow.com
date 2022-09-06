import MovieCardComponent from '@/components/MovieCardComponent.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'UpcomingMoviesComponent',
    data(){
        return {
            searchKey: ''
        }
    },
    components:{
        MovieCardComponent
    },
    created(){
        this.$store.dispatch('GET_UPCOMING_MOVIES');
    },
    computed:{
        ...mapGetters({
            movies: 'getAllMovies',
            filteredMovies: 'getFilteredMovieList',
            upcomingMovies: 'getUpcomingMovies'
        })
    },
    methods:{
        searchMovie(){
            console.warn('Searching for searchKey: ' + this.searchKey);
            this.$store.dispatch('SEARCH_MOVIE_BY_NAME', this.searchKey);
        }
    }
}