import RegisterComponent from "../RegisterComponent.vue"
export default {
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
        check() {
            console.log(this.user);
            this.$store.dispatch("LOGIN_USER", this.user);
        },
    },
    components:{
        RegisterComponent
    }
};