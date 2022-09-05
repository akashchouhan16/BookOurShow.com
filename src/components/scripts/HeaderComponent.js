import { mapGetters } from "vuex";

export default {
    name: 'HeaderComponent',
    data(){
        return {
            username: localStorage.getItem('name'),
            userId: localStorage.getItem('userId')
        }
    },
    computed:{
        ...mapGetters({
            isLoggedIn: 'getIsLoggedIn'
        }),
    },
    methods:{
        logIn(){
            this.$router.push({path: '/login'});
        },
        logOut(){
            localStorage.removeItem('role');
            localStorage.removeItem('userId');
            localStorage.removeItem('name');
            localStorage.removeItem('date');
            localStorage.removeItem('slot');
            localStorage.removeItem('seat');
            localStorage.removeItem('loggedIn');
            // this.$router.push({path: '/login'});
            location.reload();
        },
        isUserLoggedIn(){
            const loggedIn = localStorage.getItem('loggedIn');
            if(loggedIn === undefined || loggedIn === null || loggedIn === '')
                return false;
            return true;
        }

    }
}