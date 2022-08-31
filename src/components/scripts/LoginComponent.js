// import RegisterComponent from "../RegisterComponent.vue"
export default {
    name:"LoginComponent",
    data() {
        return {
            user: {
                phoneNumber: '',
                password: '',
            },
            flag: false,
        };
    },
    methods: {
        checkLogin() {
            console.log(this.user);
            this.$store.dispatch("LOGIN_USER", this.user);
        },
    },
    components:{
        // RegisterComponent
    }
};