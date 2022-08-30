export default {
    data() {
        return {
            user: {
                phonenumber: '',
                pass: '',
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
};