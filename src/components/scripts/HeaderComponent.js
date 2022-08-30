export default {
    name: 'HeaderComponent',
    data(){
        return {

        }
    },
    methods:{
        logIn(){
            this.$router.push({path: '/login'});
        }
    }
}