import MovieCardComponent from '@/components/MovieCardComponent.vue'
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
    methods:{
        searchMovie(){
            console.warn('Searching for searchKey: ' + this.searchKey);
        }
    }
}