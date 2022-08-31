export default {
    name: 'HeaderComponent',
    data(){
        return {
            username: localStorage.getItem('name') || 'User',
            userId: localStorage.getItem('userId') || 'BOS1905156'
        }
    },
    methods:{
        logIn(){
            this.$router.push({path: '/login'});
        },
        logOut(){
            localStorage.removeItem('role');
            localStorage.removeItem('userId');
            // this.$router.push({path: '/login'});
            location.reload();
        },
        checkLoggedIn(){
            const user = localStorage.getItem('userId');
            console.log(user + " " + typeof(user));
            if(user === null || user === undefined || user === '')
                return false;
            else    
                return true;
        }
    }
}