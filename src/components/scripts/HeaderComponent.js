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
        })
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
            // this.$router.push({path: '/login'});
            location.reload();
        }
        // checkLoggedIn(){
        //     const user = localStorage.getItem('userId');
        //     if(user === null || user === undefined || user === '')
        //         return false;
        //     else    
        //         return true;
        // }
    }
}